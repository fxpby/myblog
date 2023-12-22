---
id: react-elements-children-parents
title: React elements,children,parents 和 re-render
tags:
  - react
  - re-render
---

## 1. 令人迷惑的 children 使用方式

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

### 1.1 迷惑点1: 为什么作为 children 通过 props 传递，子组件没有 re-render

`ChildComponent` 是 `MovingComponent` 的 `children`，`MovingComponent` 触发了 `re-render`， `children` 却没有触发 `re-render`

### 1.2 迷惑点2：当 children 作为 render function 时，始终 re-render

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

### 1.3 迷惑点3：React.memo 仅缓存父组件，子组件仍 re-render，包裹了子组件不需要包裹父组件

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

### 1.4 迷惑点4：使用 useCallback 包裹 render function，仍 re-render

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

## 2. 探索 React 的 `children` 是什么

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

## 3. 探索 React Element

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

## 4. 探索更新 Element

`Element` 是**不可变对象**，更新 `Element` 并触发其相应组件 `re-render` 的唯一方法是 `re-create` 一个自身对象，`re-render` 过程发生的就是这个

```jsx
const Parent = () => {
  // child definition object will be re-created.
  // so Child component will be re-rendered when Parent re-renders
  const child = <Child />;

  return <div>{child}</div>;
};
```

如果 Parent 组件 `re-render`，`child` 常量将会从头开始重新创建，从 React 的角度看，`child`是一个新的 `Element`(`re-recreated` 了对象), 但是位置和类型完全相同，所以 React 只会用新数据更新现有已经存在的组件（`re-render` 已经存在的 `Child`）

这也正是缓存（memoization）可以发挥作用的原因:

```jsx title="使用 React.memo 包裹 Child"
const ChildMemo = React.memo(Child)

const Parent = () => {
  const child = <ChildMemo />

  return <>{child}</>
}
```

```jsx title="使用 useMemo"
const Parent = () => {
  const child = useMemo(() => <Child/>, [])

  return <>{child}</>
}
```

定义的对象不会被 `re-created`，React 认为它不需要更新，`Child` 也不会 `re-render`

## 5. 解开迷惑

通过上面的探索过程，我们收集到了下述线索，现在用这些线索解开迷惑吧

1. `const child = <Child/>` 只是创建了一个 Element，即定义组件，并**不是 render**,并且是定义了一个**不可变对象**
2. 定义的组件只有在实际的 `render tree` 中出现时才会 `render`，函数式组件在最后的`return`中
3. `re-create` 定义对象会触发相关组件的 `re-render`

### 5.1 迷惑点1: 为什么作为 children 通过 props 传递，子组件没有 re-render

```jsx
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

const SomeOutsideComponent = () => {
  return (
    <MovingComponent>
      <ChildComponent />
    </MovingComponent>
  )
}
```

`children` 是在 `SomeOutsideComponent` 组件中创建的 `<ChildComponent/>` 元素，`MovingComponent` `state` 改变时，`MovingComponent` `re-render`，但是 `props` 没有变化，所以来自 `props` 的 `Element`（定义的对象）没有被 `re-create`，所以最终不会触发 `re-render`

### 5.2 迷惑点2: 当 children 作为 render function 时，始终 re-render

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

在这种情况下，`children` 是一个函数，`Element`(定义的对象)是调用函数返回的结果，在 `MovingComponent` 内部调用该函数，也就是 `MovingComponent` 每次 `re-render` 时都会调用，即 `re-create` 定义的对象 `<ChildComponent/>`,这就是触发其 `re-render` 的原因

### 5.3 迷惑点3: React.memo 仅缓存父组件，子组件仍 re-render, 包裹了子组件不需要包裹父组件

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

这里子组件是 props，和下面这种写法相等

```jsx
const SomeOutsideComponent = () => {
  // ...
  return <MovingComponentMemo children={<ChildComponent />} />;
};
```

在这里我们只对 `MovingComponentMemo` 进行了缓存，但是他仍然有 `children` `prop`，`children` 接受一个 `Element` （object）。每次 `re-render` 时都会 `re-create` 这个对象，`memoized` 组件会尝试进行 `props` 检查，检查到 `children` `prop` 改变，就会触发 `MovingComponentMemo` `re-render`, 这里 `ChildComponent` 的定义被 `re-create`，所以也会触发 `re-render`

### 5.4 迷惑点4: 使用 useCallback 包裹 render function，仍 re-render
