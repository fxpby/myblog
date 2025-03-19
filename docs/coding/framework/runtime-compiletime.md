# 运行时和编译时

## 运行时框架

假设有一个框架，提供一个 `Render` 函数，用户可以为该函数提供一个树型结构的数据对象，然后 `Render` 函数会根据该对象递归地将数据渲染成 `DOM` 元素，我们规定树型结构的数据对象如下👇🏻

```js
const obj = {
  tag: 'div',
  children: [
    {tag: 'span', children: 'hello March'}
  ]
}
```

其中每个对象都有两个属性，`tag` 代表标签名称，`children` 可以是一个数组（子节点）或者一段文本（文本子节点）。我们继续实现 `Render` 函数👇🏻

```js
function Render(obj, root) {
  const el = document.createElement(obj.tag)
  if (typeof obj.children === 'string') {
    const text = document.createTextNode(obj.children)
    el.appendChild(text)
  } else if (obj.children) {
    // 数组，递归调用 Render, 使用 el 作为 root 参数
    obj.children.forEach(child => {
      Render(child, el)
    })
  }

  // 最后将元素添加到 root
  root.appendChild(el)
}
```

这样的话，用户就可以像下面这样使用了👇🏻

```js
const obj = {
  tag: 'div',
  children: [
    {tag: 'span', children: 'hello March'}
  ]
}

Render(obj, document.body)
```

但是这样手写树型结构的数据对象很繁琐并且也不直观，我们开始思考能否引入编译的手段，把 `HTML` 标签编译成树型结构对象，这样也可以继续使用我们的 `Render` 函数

## 运行时 + 编译时框架

假设我们现在编写了一个叫做 `Compiler` 的程序，这个程序的作用是把 `HTML` 字符串编译成树型结构的数据对象，用户可以去分别调用 `Compiler` 和 `Render` 函数👇🏻

```js
const html = `
<div>
  <span>Hello March</span>
</div>
`

// 调用 Compiler 编译得到树型结构的数据对象
const obj = Compiler(html)
Render(obj, document.body)
```

上面这段代码其实是**运行时编译**，也就是代码运行时才开始编译，会产生一定的性能开销

## 编译时框架

```html
<div>
  <span>Hello March</span>
</div>
```

上面的这段 `HTML` 字符串可以被编译为命令式代码👇🏻

```js
const div = document.createElement('div')
const span = document.createElement('span')
span.innerText = 'Hello March'
div.appendChild(span)
document.body.appendChild(div)
```

这样只需要一个 `Compiler` 函数就可以了，不需要 `Render` 函数了，现在这个就是一个纯编译时的框架，不支持任何运行时的内容，代码通过编译器编译后才能运行

## 总结

纯运行时的框架没有编译过程，无法分析用户提供的内容
纯编译时的框架不需要任何运行时，直接编译成可执行的 js 代码，性能可能会更好，但是灵活性降低，也就是用户提供的内容必须编译后才能使用
