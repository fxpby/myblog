---
id: react-re-renders
title: react 重新渲染
tags:
  - react
  - re-render
---

## React 的 `re-render` 是什么

探讨 React 性能问题时，一般主要关注两个内容

- initial render（初始渲染），即组件首次出现在屏幕上
- re-render(重新渲染)，即对已出现在屏幕上的组件进行第二次或者任何连续的渲染

当 React 需要使用新的数据去更新应用程序的时候，就会发生 re-render. 通常是由于用户与应用程序进行交互，或通过异步请求或某种订阅模型获取某些外部数据

没有异步数据更新或者非交互式应用程序永远不会发生 re-render

## 必要的 re-render 和 不必要的 re-render

### 必要的 re-render

重新渲染更改源组件或一个组件直接使用新的信息。如用户在 input 输入框中输入数据，管理状态的组件需要在每次按键时更新

### 不必要的 re-render

由于错误或低效的应用程序架构，通过不同的渲染机制在应用程序中传递的组件的重新渲染。如用户键入 input 输入框的场景，**整个页面**在用户发生按键动作时都会重新渲染，这里整个页面就是不必要的重新渲染

尽管 React 的速度很快，通常可以在用户无知觉的状况下处理，但是如果重新渲染发生得过于频繁或者发生在非常重的组件上，就可能会导致用户体验滞后，即交互延迟或者应用程序没有反应

## re-render 时机

组件 re-render 的四个场景

- state 改变
- 父/子组件 re-render
- context 改变
- hooks 改变

还有一个是组件的 props 变化

### state 改变

组件 state 发生变化时，会 re-render. 通常会发生在 `callback` 或 `useEffect` hook

state 改变是所有 re-render 的根源

### parent re-render

如果一个组件的父组件重新渲染，该组件也会重新渲染。即一个组件重新渲染时，也会重新渲染它的所有子组件

大多数情况是沿着树**向下**渲染，即子组件的重新渲染不会触发父组件重新渲染

### context 改变

`context provider` 值变化时，**所有**使用这个 `context` 组件都会 re-render，即使他们没有直接使用数据的变化部分

```jsx
// 1. value changes
const useValue = useContext(Context)

// 2. re-render
const Component = () => {
  const value = useValue()
}
```

并且这部分重新渲染无法直接通过 memoization 来防止，但是可以通过使用高阶组件和 `React.memo` 来伪造上下文选择器

useMemo 无效例子

```jsx
const useSomething = () => {
  // 1. 会触发 re-render 即使 something 不改变
  const {something} = useContext(Context)

  // 2. useMemo 不会起作用
  return useMemo(() => something, [something])
}

const Component = () => {
  // 3. 会 re-render 即使 something 不改变
  const {something} = useSomething()
  return ...
}
```

HOC + React.memo 伪造上下文选择器

```jsx
const withSomething = (Component) => {
  // 1. 组件被缓存
  const MemoComponent = React.memo(Component)

  return () => {
    const { something } = useSomething()

    // 2. 只有在 something 改变时才会 re-render
    return <MemoComponent something={something} />
  }
}

// 3. 只有在 something 改变时才会 re-render
const Component = withSomething(({something}) => {
  return ...
})
```

### hooks 改变

hook 中发生的所有事情都属于使用它的组件，同样适用于 context 和 state 改变的规则

- hook 内 state 的改变会触发 host 组件不可预防的 re-render
- 如果 hook 使用了 context，并且 context 的值改变，就会触发 host 组件 不可预防的 re-render

hook 可以被链式使用，链条中每一个 hook 仍属于 host 组件，并且同样的规则适用于任何一个 hook

```jsx
// 1. value 改变
const useSomething = useContext(Context)

// 2. chain reaction
const useValue = {
  useSomething()
}

// -----------------------
// 3. re-renders
const Component = () => {
  const value = useValue()
  return ...
}
```

### ⛔props 改变

在 re-render 非 memoized 组件时，组件的 props 是否改变并不重要

为了改变 props，需要通过父组件对其进行更新。这意味着父组件需要 re-render，这会触发子组件的 re-render，不管 props 是什么

只有在使用 React.memo or useMemo 时，props 改变才重要

## 规避 re-render 的方式

### ⛔在 render function 中创建组件

在另一个组件的 render function 中创建组件是一种反模式，这可能是最大的性能杀手

每次 re-render react 会 re-mount 该组件（即 destroy 销毁它并从头开始 re-create 重新创建），这会比正常的 re-render 慢更多，除此之外还会导致一些问题：

- re-render 时内容可能闪烁
- 每次 re-render 都会在组件中 reset 重置 state
- 每次 re-render 都触发无依赖的 useEffect
- 如果某个组件已经 focused，focus 将会失去

反模式：

```jsx
// 1. re-render
const Component = () => {
  // 2. new component
  const SlowComponent = () => {
  console.log("slow component re-renders");
  useEffect(() => {
    console.log("slow component re-mounts");
  }, []);
  return <div>slow component</div>;
};

  return (
    // 3. re-mount
    <SlowComponent/>
  )
}
```

放到 render function 外

```jsx
// 2. same component
const SlowComponent = () => {
  console.log("slow component re-renders");
  useEffect(() => {
    console.log("slow component re-mounts");
  }, []);
  return <div>slow component</div>;
};

// 1. re-render
const Component = () => {
  return (
    // 3. 仅 re-render，不触发无依赖的 useEffect
    <SlowComponent/>
  )
}
```

### ✅ 向下移动 state

当一个重型组件需要管理 state，并且 state 只用于 render tree 的一小部分时，这个方式会很棒

典型场景就是在一个复杂的组件中通过点击按钮打开/关闭对话框，而改组件会渲染页面大部分内容

在这种情况下，控制对话框显隐状态、对话框本身和触发更新的按钮都可以封装在一个较小的组件中。这样较大的组件不会在这些 state 发生变化时 re-render

不拆分，全量

```jsx
const SlowComponent = () => {
  console.log('slow component re-renders')
  return <>slow component</>
}

const FullComponent = () => {
  const [isShow, setIsShow] = useState(false)
  const handleClick = () => {
    // 1. state change，触发 re-render
    setIsShow(!isShow)
  }
  return (
    <div>
      <button onClick={() => handleClick()}>click here</button>
      {isShow && <div>dialog</div>}
      {/* 2. re-render */}
      <SlowComponent />
    </div>
  );
}
```

拆分后

```jsx
const SlowComponent = () => {
  console.log('slow component re-renders')
  return <>slow component</>
}

const ComponentWithButton = () => {
  const [isShow, setIsShow] = useState(false)
  const handleClick = () => {
    // 1. state change，触发 re-render
    setIsShow(!isShow)
  }
  return (
    <div>
      <button onClick={() => handleClick()}>click here</button>
      {isShow && <div>dialog</div>}
    </div>
      
  )
}

const SplitComponent = () => {
  return (
    <div>
      <ComponentWithButton/>
      {/* 2. 不受影响 */}
      <SlowComponent />
    </div>
  );
}
```

### ✅ children as props
