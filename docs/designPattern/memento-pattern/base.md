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
  }

  setContent(content) {
    this.content = content
  }

  getContent() {
    return this.content
  }

  saveContentToMemento() {
    return new Memento(this.content)
  }

  getContentFromMemento(memento) {
    this.content = memento.getContent()
  }
}

const editor = new Editor()
const careTaker = new CareTaker()
editor.setContent('今天天气不错')
editor.setContent('我也这么觉得')
// 存储备忘录
careTaker.add(editor.saveContentToMemento())
editor.setContent('明天天气怎么样')
careTaker.add(editor.saveContentToMemento())
editor.setContent('好像也还阔以')

console.log(editor.getContent())
editor.getContentFromMemento(careTaker.get(1))
console.log(editor.getContent())
editor.getContentFromMemento(careTaker.get(0))
console.log(editor.getContent())
```

## 设计原则验证

- 状态对象于使用者分开，解耦
- 符合开放封闭原则
