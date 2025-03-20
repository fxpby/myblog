# 备忘录模式 Memento Pattern

## 介绍

- 随时记录一个对象的状态变化
- 随时可以恢复之前的某个状态（如撤销功能）

## 示例

### 备忘编辑器

```js
// 状态备忘
class Memento {
  constructor(content) {
    this.content = content;
  }

  getContent() {
    return this.content
  }
}

// 备忘列表
class CareTaker {
  constructor() {
    this.list = []
  }

  add(memento) {
    this.list.push(memento)
  }

  get(index) {
    return this.list[index]
  }
}

class Editor {
  constructor() {
    this.content = null
    this.careTaker = new CareTaker()
  }

  setContent(content) {
    this.content = content
  }

  getContent() {
    return this.content
  }

  save() {
    this.careTaker.add(new Memento(this.content))
  }

  restore(index) {
    const memento = this.careTaker.get(index)
    return memento && memento.getContent()
  }
}

const editor = new Editor()
editor.setContent('今天天气不错')
editor.setContent('我也这么觉得')
// 存储备忘录
editor.save()
editor.setContent('明天天气怎么样')
editor.save()
editor.setContent('好像也还阔以')

console.log(editor.getContent())
console.log(editor.restore(1))
console.log(editor.restore(0))
```

## 设计原则验证

- 状态对象于使用者分开，解耦
- 符合开放封闭原则
