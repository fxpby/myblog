---
id: react-re-renders
title: React 重新渲染(re-render)
tags:
  - react
  - re-render
---

## 🍰1. React 的 `re-render` 是什么

探讨 React 性能问题时，一般主要关注两个内容

- `initial render`（初始渲染），即组件首次出现在屏幕上
- `re-render`(重新渲染)，即对已出现在屏幕上的组件进行第二次或者任何连续的渲染

当 React 需要使用新的数据去更新应用程序的时候，就会发生 `re-render`. 通常是由于用户与应用程序进行交互，或通过异步请求或某种订阅模型获取某些外部数据

没有异步数据更新或者非交互式应用程序永远不会发生 `re-render`

## 🍀2. 必要的 `re-render` 和 不必要的 `re-render`

### 🍃2.1 必要的 `re-render`

重新渲染更改源组件或一个组件直接使用新的信息。如用户在 input 输入框中输入数据，管理状态的组件需要在每次按键时更新

### 🍂2.2 不必要的 `re-render`

由于错误或低效的应用程序架构，通过不同的渲染机制在应用程序中传递的组件的重新渲染。如用户键入 input 输入框的场景，**整个页面**在用户发生按键动作时都会重新渲染，这里整个页面就是不必要的重新渲染

尽管 React 的速度很快，通常可以在用户无知觉的状况下处理，但是如果重新渲染发生得过于频繁或者发生在非常重的组件上，就可能会导致用户体验滞后，即交互延迟或者应用程序没有反应

## 🕛3. `re-render` 时机

组件 `re-render` 的四个场景

- `state` 改变
- 父/子组件 `re-render`
- `context` 改变
- `hooks` 改变

还有一个是组件的 `props` 变化

### 💭3.1 `state` 改变

组件 `state` 发生变化时，会 `re-render`. 通常会发生在 `callback` 或 `useEffect` hook

**`state` 改变是所有 `re-render` 的根源**

### 💭3.2 parent `re-render`

如果一个组件的父组件重新渲染，该组件也会重新渲染。即一个组件重新渲染时，也会重新渲染它的所有子组件

大多数情况是沿着树**向下**渲染，即子组件的重新渲染不会触发父组件重新渲染

### 💭3.3 `context` 改变

`context provider` 值变化时，**所有**使用这个 `context` 组件都会 `re-render`，即使他们没有直接使用数据的变化部分

```jsx
// 1. value changes
const useValue = useContext(Context)

// 2. re-render
const Component = () => {
  const value = useValue()
}
```

并且这部分重新渲染无法直接通过缓存来防止，但是可以通过使用高阶组件和 `React.memo` 来伪造上下文选择器

`useMemo` 无效例子

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

`HOC` + `React.memo` 伪造上下文选择器

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

### 💭3.4 `hooks` 改变

`hook` 中发生的所有事情都属于使用它的组件，同样适用于 `context` 和 `state` 改变的规则

- `hook` 内 `state` 的改变会触发宿主组件不可预防的 `re-render`
- 如果 `hook` 使用了 `context`，并且 `context` 的值改变，就会触发宿主组件不可预防的 `re-render`

`hook` 可以被链式使用，链条中每一个 `hook` 仍属于宿主组件，并且同样的规则适用于任何一个 `hook`

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

### 💬 3.5 `props` 改变

在 `re-render` 非缓存组件时，组件的 `props` 是否改变并不重要

为了改变 `props`，需要通过父组件对其进行更新。这意味着父组件需要 `re-render`，这会触发子组件的 `re-render`，不管 `props` 是什么

只有在使用 `React.memo` or `useMemo` 时，`props` 改变才重要

## 🚑4. 规避 `re-render` 的方式

### 🌟4.1 巧妙利用组合

#### ⛔4.1.1 在 `render function` 中创建组件

在另一个组件的 `render function` 中创建组件是一种反模式，这可能是最大的性能杀手

每次 `re-render` react 会 `re-mount` 该组件（即 `destroy` 销毁它并从头开始 `re-create` 重新创建），这会比正常的 `re-render` 慢更多，除此之外还会导致一些问题：

- `re-render` 时内容可能闪烁
- 每次 `re-render` 都会在组件中 `reset` 重置 `state`
- 每次 `re-render` 都触发无依赖的 `useEffect`
- 如果某个组件已经 `focused`，`focus` 将会失去

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

放到 `render function` 外

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

#### ✅4.1.2 向下移动 `state`

当一个重型组件需要管理 `state`，并且 `state` 只用于 `render tree` 的一小部分时，这个方式会很棒

典型场景就是在一个复杂的组件中通过点击按钮打开/关闭对话框，而改组件会渲染页面大部分内容

在这种情况下，控制对话框显隐状态、对话框本身和触发更新的按钮都可以封装在一个**较小的组件**中。这样较大的组件不会在这些 `state` 发生变化时 `re-render`

```jsx title="不拆分，全量"
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

```jsx title="拆分后"
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

#### ✅4.1.3 `children` as `props`

这种模式和前面的“向下移动”类似，那种将 `state` 包裹在 `children` 周围的感觉，即将 `state` 变化封装在一个较小的组件中

区别是 `state` 用在一个元素上，该元素包裹了 `render tree` 的一个较慢的部分，所有无法轻松提取

较多的使用场景是 `onScroll` 或 `onMouseMove` 的 回调 `callbacks` 附加到组件的根元素上

这种情况 `state` 管理和使用相关 `state` 的组件提取到一个小组件中，并将慢组件作为 `children` 传递给它。从较小组件的角度看，`children` 只是 `prop`，不会收到 `state` 改变的影响，故不会 `re-render`

```jsx title="不拆分，全量"
const SlowComponent = () => {
  console.log("slow component re-renders")
  return <div>slow component</div>
}

const FullComponent = () => {
  const [state, setState] = useState(0)

  const handleClick = () => {
    // 1. 触发 re-render
    setState(state + 1)
  }

  return (
    <div onClick={() => handleClick()}>
      <div>Re-render count: {state}</div>
      {/* 2. re-render */}
      <SlowComponent />
    </div>
  )
}
```

```jsx title="拆分后"
const SlowComponent = () => {
  console.log("slow component re-renders")
  return <div>slow component</div>
}

const ComponentWithClick = ({children}) => {
  const [state, setState] = useState(0)

  const handleClick = () => {
    // 1. 触发 re-render
    setState(state + 1)
  }

  return (
    <div onClick={() => handleClick()}>
      <div>Re-render count: {state}</div>
      {/* 2. props，不受影响 */}
      {children}
    </div>
  )
}

const SplitComponent = () => {
  return (
    <ComponentWithClick>
      {/* 3. 不受影响 */}
      <SlowComponent/>
    </ComponentWithClick>
  )
}
```

#### ✅4.1.4 `components` as `props`

和之前的 `children` 作为 `props` 类似，将 `state` 封装在一个较小的组件内，重型组件作为 `props` 传递，`props` 不受 `state` 改变的影响，故重型组件不会 `re-render`

当一些重型组件的 `state` 独立，但是无法作为 `children` 提取出来时，这种方法就很棒

```jsx title="不拆分，全量"
const SlowComponent = () => {
  console.log("slow component re-renders")
  return <div>slow component</div>
}

const AnotherSlowComponent = () => {
  console.log("another slow component re-renders")
  return <div>another slow component</div>
}

const FullComponent = () => {
  const [state, setState] = useState(0)
  const handleClick = () => {
    // 1. 触发 re-render
    setState(state + 1)
  }

  return (
    <div>
      <div>Re-render count: {state} </div>
      {/* 2. re-render */}
      <SlowComponent/>
      {/* 2. re-render */}
      <AnotherSlowComponent/>
    </div>
  )
}
```

```jsx title="拆分后"
const SlowComponent = () => {
  console.log("slow component re-renders")
  return <div>slow component</div>
}

const AnotherSlowComponent = () => {
  console.log("another slow component re-renders")
  return <div>another slow component</div>
}

const ComponentWithClick = (left, right) => {
  const [state, setState] = useState(0)
  const handleClick = () => {
    // 1. 触发 re-render
    setState(state + 1)
  }

  return (
    <div>
      <div>Re-render count: {state} </div>
      {/* 2. 作为 props 不受影响 */}
      {left}
      {/* 2. 作为 props 不受影响 */}
      {right}
    </div>
  )
}

const SplitComponent = () => {
  const left = <SlowComponent/>
  const right = <AnotherSlowComponent/>

  return (
    <>
      <ComponentWithClick left={left} right={right}/>
    </>
  )
}
```

### 🛴4.2 使用 `React.memo`

使用 `React.memo` 包裹组件可以停止在 `render tree` 的某处触发下游的 `re-render` 链条，除非组件的 `props` 改变

在渲染不依赖 `re-render` 源头（`state` 改变）的重型组件的场景这个方法很棒

```jsx
const Child = () => {
  console.log("child re-render")
  return <>child</>
}

const ChildMemo = React.memo(Child)

const Component = () => {
  const [state, setState] = useState(0)

  const handleClick = () => {
    setState(state + 1)
  }

  return (
    <>
      <button onClick={() => handleClick()}>click here, state: {state}</button>
      <ChildMemo/>
    </>
  )
}
```

#### ✅4.2.1 `React.memo` + `component with props`

**所有的非基础类型（引用类型）的 `props`** 都必须进行缓存（`useMemo`），这样 `React.memo` 才能工作

```jsx
const Child = ({value}) => {
  console.log('Child re-render ', value.value)
  return <>{value.value}</>
}

const ChildMemo = React.memo(Child)

const Component = () => {
  const [state, setState] = useState(0)

  const handleClick = () => {
    // 1. 触发 re-render
    setState(state + 1)
  }

  const memoValue = useMemo(() => ({value: 'second'}), [])

  return (
    <>
      <button onClick={()=>handleClick()}>click here, state: {state}</button>
      {/* 2. value changes, re-render */}
      <ChildMemo value={{value: 'first'}}/>
      {/* 2. memoValue 没变, 不会 re-render */}
      <ChildMemo value={memoValue}/>
    </>
  )
}
```

#### ✅4.2.2 `React.memo` + `components as props or children`

`React.memo` 必须应用于作为 `children` 或 `props` 的元素

当 `children` 和 `props` 都是 `object` 时，每次 `re-render` 都会改变，缓存的父组件将会不起作用

```jsx title="Memoized children or props of not memoized parent should not"
const Child = ({value}) => {
  console.log("Child re-render ", value.value)
  return <>{value.value}</>
}

const ChildMemo = React.memo(Child)

const Parent = ({left, children}) => {
  return (
    <div>
      {left}
      {children}
    </div>
  )
}

const ParentMemo = React.memo(Parent)

const Component = () => {
  const [state, setState] = useState(0)

  const handleClick = () => {
    // 1. 触发 re-render
    setState(state + 1)
  }

  const memoValue = useMemo(() => ({value: "memoized"}), [])

  return (
    <>
      <button onClick={() => handleClick()}>click here,state: {state}</button>
      {/* re-render */}
      <ParentMemo left={<child value={{value: "left child of ParentMemo"}} />}>
        <Child value={{value: "child of ParentMemo"}}/>
      </ParentMemo>

      {/* re-render */}
      <ParentMemo left={<ChildMemo value={{value: "left ChildMemo of ParentMemo without memoValue"}} />}>
        <ChildMemo value={{value: "ChildMemo of ParentMemo without memoValue"}}/>
      </ParentMemo>
      
      {/* doesn't re-render */}
      <Parent left={<ChildMemo value={memoValue} />}>
        <ChildMemo value={memoValue}/>
      </Parent>
    </>
  )
}
```

### 🚗4.3 使用 `useMemo`/`useCallback` 提高性能

#### ⛔4.3.1 反模式：在 `props` 中使用非必要的 `useMemo`/`useCallback`

缓存 `props` 本身不会阻止子组件 `re-render`，如果一个父组件 `re-render`，无论 `props` 怎么样都会触发它子组件的 `re-render`

```jsx
const Child = ({value}) => {
  console.log("child re-render", value.value)
  return <>{value.value}</>
}

const Component = () => {
  const [state, setState] = useState(0)

  const handleClick = () => {
    // 1. 触发 re-render
    setState(state + 1)
  }

  const memoValue = useMemo(() => ({value: "child"}), [])

  return (
    <>
      <button onClick={()=>handleClick()}>click here, state:{state}</button>
      {/* 2. re-render */}
      <Child value={memoValue} />
    </>
  )
}
```

#### ✅4.3.2 必要的使用 `useMemo`/`useCallback`

如果子组件被 `React.memo` 包裹，则**所有**非基础类型（引用类型）的 `props` 都必须被缓存

```jsx
const Child = ({value}) => {
  console.log('Child re-render ', value.value)
  return <>{value.value}</>
}

const ChildMemo = React.memo(Child)

const Component = () => {
  const [state, setState] = useState(0)

  const handleClick = () => {
    // 1. 触发 re-render
    setState(state + 1)
  }

  const memoValue = useMemo(() => ({value: 'second'}), [])

  return (
    <>
      <button onClick={()=>handleClick()}>click here, state: {state}</button>
      {/* 2. value changes, re-render */}
      <ChildMemo value={{value: 'first'}}/>
      {/* 2. memoValue 没变, 不会 re-render */}
      <ChildMemo value={memoValue}/>
    </>
  )
}
```

如果组件在 `useEffect`, `useMemo`, `useCallback` 等 `hook` 中使用非基础类型值作为依赖，也应该被缓存

```jsx
const component = () => {
  const [state, setState] = useState(0)

  const handleClick = () => {
    // 1. 触发 re-render
    setState(state + 1)
  }

  const value = {value: "not memoized"}

  const memoValue = useMemo(() => ({ value: "memoized" }))

  // 除首次渲染其他不触发
  useEffect(() => {
    console.log("never triggered")
  }, [memoValue])

  // 每次重新渲染都触发
  useEffect(() => {
    console.log("triggered on every re-render")
  }, [value])

  return (
    <button onClick={() => handleClick()}>click here</button>
  )
}
```

#### ✅4.3.3 使用 `useMemo` 进行复杂的计算

`useMemo` 的一个用处是避免每次 `re-render` 是进行复杂的计算

`useMemo` 存在性能耗费问题（消耗部分内存，让初次渲染变慢），不能滥用。在 React 中，挂载和更新组件是最昂贵复杂的计算

所以，使用 `useMemo` 的典型场景是缓存 React 元素，通常是已经存在的 `render tree` 的一部分或生成 `render tree` 的结果，如返回新元素的 map 函数

同组件更新相比，排序或过滤数组这种纯 JavaScript 操作的成本可以忽略不计

```jsx
const Child = ({value}) => {
  console.log("child re-render", value.value)
  return <>{value.value}</>
}

const values = [1,2,3]
const values2 = [4,5,6]


const Component = () => {
  const [state, setState] = useState(0)

  const handleClick = () => {
    // 1. 触发 re-render
    setState(state + 1)
  }

  const items = useMemo(() => {
    return values.map((v,i) => <Child key={i} value={{v}} />)
  }, [])

  const items2 = values2.map((v,i) => <Child key={i} value={{v}} />

  return (
    <>
      <button> click here {state} </button>
      {items}
      <br/>
      {items2}
    </>
  )
}
```

```jsx
const SlowComponent = () => {
  console.log("slow component re-renders");
  return <div>slow component</div>;
};

const component = () => {
  const [state, setState] = useState(1);

  const onClick = () => {
    setState(state + 1);
  };

  const slowComponent = useMemo(() => {
    return <SlowComponent />;
  }, []);

  return (
    <>
      <button onClick={onClick}>click here {state}</button>
      <br />
      {/* 不会 re-render */}
      {slowComponent}
    </>
  )
}
```

## 🚄5. 提高列表的 `re-render` 性能

除了上面那些和 `re-render` 相关的规则模式外，`key` 属性也会影响 `React` 列表中的性能

**仅提供 `key` 属性并不能提高列表的性能，为了防止列表元素 `re-render`，需要使用 `React.memo` 对其进行封装，并遵守所有的最佳实践**😆

`key` 中的值需要是**字符串**，并且在列表中每次元素 `re-render` 时 `key` 都需要保持一致

通常 `item` 的 `id` 或数组的 `index` 可以用来当做 `key`

如果列表是**静态**的，即元素不会添加/删除/插入/重新排序，则可以使用数组的 `index` 作为 `key`

but，在**动态**列表中，使用数组 `index` 作为 `key` 就有问题了

- 有 `state` 或 不受控的元素（如 form inputs）的话，可能会出现错误
- 如果 `items` 被 `React.memo` 包裹，性能会下降

```jsx title="静态列表，无区别"
const Child = ({ value }: { value: number }) => {
  console.log("Child re-renders", value);
  return <div>{value}</div>;
};

const values = [1,2,3]

const ChildMemo = React.memo(Child)

const Component = () => {
  const [state, setState] = useState(0)
  const handleClick = () => {
    setState(state + 1)
  }

  return (
    <>
      <button onClick={() => handleClick()}>click here {state}</button>
      <br/>
      {values.map((val,idx) => (<ChildMemo value={val} key={idx} />))}
      <br/>
      {values.map((val) => (<ChildMemo value={val} key={val} />))}
    </>
  )
}
```

```jsx title="动态列表，索引粗问题了"
const Child = ({ value }: { value: number }) => {
  console.log("Child re-renders", value);
  return <div>{value}</div>;
};

const values = [1,2,3]

const ChildMemo = React.memo(Child)

const Component = () => {
  const [state, setState] = useState(false)
  const handleClick = () => {
    setState(!state)
  }

  const sortedValues = state ? values.sort() : values.sort().reverse()

  return (
    <>
      <button onClick={() => handleClick()}>click here {state}</button>
      <br/>
      {/* 用 React.memo 包裹也 gg，还是触发了 re-render */}
      {sortedValues.map((val, index) => (<ChildMemo value={`child of index: ${val}` key={index}} />))}
      <br/>
      {/* 没触发 re-render */}
      {sortedValues.map((val) => (<ChildMemo value={`child of val: ${val}` key={val}} />))}
    </>
  )
}
```

### ⛔5.1 反模式：使用随机数作为列表的 key

这个是必需必需必需避免的行为，打死也不能用随机数作为列表的 `key`，因为会导致 React 在**每次 re-render** 时都 `re-mount` 元素，进而

- 列表性能糟糕
- 有 `state` 或 任何不受控元素（如 form inputs）时出现错误

```jsx
const Child = ({ value }: { value: number }) => {
  console.log("Child re-renders", value);

  useEffect(() => {
    console.log("Child re-mounts");
  }, []);
  return <div>{value}</div>;
};

const values = [1,2,3]

const ChildMemo = React.memo(Child)

const Component = () => {
  const [state, setState] = useState(0)
  const handleClick = () => {
    setState(state + 1)
  }

  return (
    <>
      <button onClick={() => handleClick()}>click here {state}</button>
      <br/>
      {/* 导致 re-mounts every render ! */}
      {values.map((val) => (<ChildMemo value={val} key={Math.random()} />))}
    </>
  )
}
```
