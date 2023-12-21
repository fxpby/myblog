---
id: react-elements-children-parents
title: React elements,children,parents 和 re-renders
tags:
  - react
  - re-render
---

## children 模式

<!-- TODO 什么是 children 模式 -->

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

这样做之后发现移动鼠标就不会触发 `ChildComponent` 的 `re-render` 了，但是有两个令人迷惑的点：

- `ChildComponent` 是 `MovingComponent` 的 `children``，MovingComponent` 在 `re-render`，为什么 `children` 没有 `re-render`
