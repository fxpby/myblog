---
id: react-elements-children-parents
title: React elements,children,parents 和 re-renders
tags:
  - react
  - re-render
---

## 令人迷惑的 children 使用方式

想象一个场景，里面有频繁的 `state` 变化，如在 `onMouseMove` 回调中更新 `state`

```jsx
const MovingComponent = () => {
  const [state, setState] = useState({x: 100, y: 100})

  return (
    <div
      onMouseMove={(e) => setState({x: e.clientX - 20, y: e.clientY - 20})}
      style={{left: state.x, top: state.y}}
    >
      <ChildComponent />
    </div>
  )
}
```

React 组件会在 `state` 更新时 `re-render` 自身及**所有**子组件，上面例子中，每次移动鼠标都会更新 `state` ，进而触发 `re-render`，这样子组件 `ChildComponent` 也会 `re-render`，如果 `ChildComponent` 比较复杂沉重，这频繁的 `re-render` 会带来性能问题

除了使用 `React.memo`, 可以在 `ChildComponent` 外部提取, 将其作为 `children` 传递

```jsx title="MovingComponent"
const MovingComponent = ({children}) => {
  const [state, setState] = useState({x: 100, y: 100})

  return (
    <div
      onMouseMove={(e) => setState({x: e.clientX - 20, y: e.clientY - 20})}
      style={{left: state.x, top: state.y}}
    >
      {/* children 不会 re-render */}
      {children}
    </div>
  )
}
```

再将 `MovingComponent` 和 `ChildComponent` 组合在一起

```jsx title="SomeOutsideComponent"
const SomeOutsideComponent = () => {
  return (
    <MovingComponent>
      <ChildComponent />
    </MovingComponent>
  )
}
```

`ChildComponent` 现在属于 `SomeOutsideComponent`，`SomeOutsideComponent` 是 `MovingComponent` 的父组件

这样做之后发现移动鼠标就不会触发 `ChildComponent` 的 `re-render` 了，但是有几个令人迷惑的点，接下来一起来看下

### 迷惑点1: 为什么作为 children 时，子组件没有 re-render

`ChildComponent` 是 `MovingComponent` 的 `children`，`MovingComponent` 触发了 `re-render`， `children` 却没有触发 `re-render`

### 迷惑点2：当 children 作为 render function 时，始终 re-render

`children` 作为一个 render function 时，`ChildComponent` 就会触发 `re-render`, 即使它并不依赖于已经改变的 `state`

  ```jsx
  const MovingComponent = ({children}) => {
    const [state, setState] = useState({x: 100, y: 100})

    return (
      <div
        onMouseMove={(e) => setState({x: e.clientX - 20, y: e.clientY - 20})}
        style={{left: state.x, top: state.y}}
      >
        {children({data: 'something'})}
      </div>
    )
  }

  // SomeOutsideComponent 不会 re-render
  const SomeOutsideComponent = () => {
    return (
      <MovingComponent>
        {/* ChildComponent 会在 MovingComponent state 改变时 触发 re-render，即使没有传递props */}
        {() => <ChildComponent />}
      </MovingComponent>
    )
  }
  ```

  上面这个例子中，`SomeOutsideComponent` 没有 `re-render`，但是 `ChildComponent` 作为 `render function` 使用时，没有 `props` 传递，也会触发 `re-render`

### 迷惑点3：React.memo 仅缓存父组件，子组件仍 re-render

`React.memo`，如果对 `SomeOutsideComponent` 引入一些 `state`，并尝试用 `React.memo` 阻止 `children` `re-render`

```jsx title="缓存父组件，不缓存子组件"
const MovingComponent = ({children}) => {
  const [state, setState] = useState({x: 100, y: 100})

  return (
    <div
      onMouseMove={(e) => setState({x: e.clientX - 20, y: e.clientY - 20})}
      style={{left: state.x, top: state.y}}
    >
      {children({data: 'something'})}
    </div>
  )
}

const MovingComponentMemo = React.memo(MovingComponent)

const SomeOutsideComponent = () => {
  const [state, setState] = useState()

  return (
    <MovingComponentMemo>
      {/* 父组件 state 变化时 re-render，子组件也会触发 re-render */}
      <ChildComponent/>
    </MovingComponentMemo>
  )
}
```

```jsx title="只缓存子组件，不缓存父组件"
const MovingComponent = ({children}) => {
  const [state, setState] = useState({x: 100, y: 100})

  return (
    <div
      onMouseMove={(e) => setState({x: e.clientX - 20, y: e.clientY - 20})}
      style={{left: state.x, top: state.y}}
    >
      {children({data: 'something'})}
    </div>
  )
}

const ChildComponentMemo = React.memo(ChildComponent)

const SomeOutsideComponent = () => {
  const [state, setState] = useState()

  return (
    <MovingComponent>
      {/* 父组件 state 变化时 re-render，子组件 不会 触发 re-render */}
      <ChildComponentMemo/>
    </MovingComponent>
  )
}
```

### 迷惑点4：使用 useCallback 包裹 render function，仍 re-render

```jsx
const SomeOutsideComponent = () => {
  const [state, setState] = useState()

  const child = useCallback(() => <ChildComponent />, [])

  return (
    <MovingComponent>
      {/* 尽管用 useCallback 包裹缓存了，但是还是 re-render */}
      {child}
    </MovingComponent>
  )
}
```

## 探索 React 的 `children` 是什么

```jsx
const Parent = ({children}) => {
  return <>{children}</>
}

<parent>
  <Child />
</parent>
```

从上面代码看，这个 `children` 就是 **`props`**，我们使用时要么解构，要么就 `props.children`

甚至可以直接这么写, 效果一样一样的

```jsx
<Parent children={<Child />} />
```

和其他的 prop 一样，也可以将组件作为 Element, Function, Component 传递

```jsx title="render function in children"
// 作为 props
<Parent children={() => <Child />} />

<Parent>
  {() => <Child />}
</Parent>

const Parent = ({children}) => {
  return <>{children()}</>
}
```

## 探索什么是 React Element

下面这行代码发生了什么

```jsx
const child = <Child />
```

可能有人会说这是组件 `rendered`，`Child` 组件的 渲染周期开始，but，不太对

`<Child />` 被称为元素，是 `React.createElement()` 的语法糖, 返回一个对象

这个对象描述了 实际在 render tree 中出现时，希望在屏幕上看到的内容

```js
React.createElement(
  type,
  [props],
  [...children]
)
// 创建并返回给定类型的新 React 元素。
// 类型参数可以是标签名称字符串（如 'div' 或 'span' ）、React 组件类型（类或函数）或 React 片段类型
```

```jsx
const child = <Child />;
// 等同于
const child = React.createElement(Child, null, null);
```

**只有**在返回结果（函数式组件中相当于“渲染内容”），并且**只有**在 `Parent` 组件渲染自己**后**，才会触发 `Child` 组件的实际渲染

```jsx
const Parent = () => {
  const child = <Child/>

  return <>{child}</>
}
```

## 更新元素
