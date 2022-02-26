# HTML 属性和 DOM 属性关系

## 两种属性名的关系

```html
<input id="my-input" class="foo" type="text" value="foo" aria-valuenow="foo" />
```

```js
const el = document.querySelector('#my-input')
```

### 1. 属性名一样

`HTML Attributes` 中 `id="my-input"`、`type="text"`、`value="foo"`

`DOM Properties` 中对应 `el.id`、`el.type`、`el.value`

### 2. 同一个属性名不一样

`HTML Attributes` 中 `class="foo"`

`DOM Properties` 中对应 `el.className`

### 3. HTML Attributes 有，DOM Properties 没有

比如 `aria-*`

### 4. HTML Attributes 没有，DOM Properties 有

比如 `el.textContent = "123"`

## 两种属性值的关系

```html
<input id="my-input" type="foo" value="foo" />
```

页面上修改文本内容为`bar`, `console.log(el.value)`得到的结果是 `bar`, 但是 `console.log(el.getAttribute('value'))`得到的依然是`foo`, 也就是说用户对文本框的修改不影响`el.getAttribute('value')`的值，所以**结论是 `HTML Attributes`的作用是设置与之对应的`DOM Properties`的初始值。** 也就是说一旦值改变，DOM 属性值改变，但是 HTML属性值始终不变。

**一个 HTML属性可能对应多个 DOM 属性**， 比如上面代码段中`HTML`的 `value` 属性对应 DOM 中的 `value`和`defaultValue`属性

浏览器对`HTML`属性不合法值有处理，比如上面代码段中`type="foo"`,我们都知道 `type` 属性没有 `foo`这个值

```js
console.log(el.type) // text
```

也就是说 `DOM`属性获取时获取的是处理过的合法的值
