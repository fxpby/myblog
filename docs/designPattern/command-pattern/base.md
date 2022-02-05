# 命令模式 Command Pattern

## 介绍

- 需要向某些对象发送请求，但是不知道请求接收者和被请求的操作是什么，使得请求发送者和接收者消除彼此之间的耦合关系
- 支持撤销、排队等操作

## 示例

### 战场传递命令

在一些战争电影里，将军发号施令向来不是扯着嗓子喊给千军万马的士兵们的，一般都是有发号专员，比如小号手，通过吹响号角，传递战斗信号。

```js
// 接收者
class Receiver {
  exec() {
    console.log('执行命令')
  }
}

// 命令者
class Command {
  constructor(receiver) {
    this.receiver = receiver
  }

  cmd() {
    console.log('触发命令')
    this.receiver.exec()
  }
}

// 触发者
class Invoker {
  constructor(command) {
    this.command = command
  }

  invoke() {
    console.log('开始调用')
    this.command.cmd()
  }
}

// 士兵
const soldier = new Receiver()
// 小号手
const trumpeter = new Command(soldier)
// 将军
const general = new Invoker(trumpeter)
general.invoke()
```

### 菜单程序

假设编写一个用户界面程序，界面中有数十个 button，因为项目复杂，所以让部分程序员负责绘制 button，其余负责编写 button 点击行为逻辑，行为都被封装在对象中。绘制 button 的同学不知道这个按钮将来的行为逻辑是什么，可能用来刷新菜单，也可能用来增加子菜单。

```html
<button type="button" id="btn1"> button 1</button>
<button type="button" id="btn2"> button 2</button>
<button type="button" id="btn3"> button 3</button>
<script>
  const btn1 = document.getElementById("btn1");
  const btn2 = document.getElementById("btn2");
  const btn3 = document.getElementById("btn3");
</script>
```

下面定义 setCommand 函数，该函数负责往按钮上面安装命令，点击按钮会执行某个 command 命令，执行命令的动作被约定为调用 command 对象的 execute 方法。
负责绘制按钮的同学只需要预留好安装命令的接口让 command 对象知道如何和正确的对象沟通就可以了。

```js
const setCommand = (button, command) => {
  button.onclick = () => {
    command.execute()
  }
}
```

编写点击按钮行为的同学完成了刷新菜单界面、增加子菜单和删除子菜单的功能，这些功能分别分布在 MenuBar 和 SubMenu 这俩对象中。

```js
const MenuBar = {
  refresh: () => {
    console.log('刷新菜单')
  }
}

const SubMenu = {
  add: () => {
    console.log('增加子菜单')
  },
  del: () => {
    console.log('删除子菜单')
  }
}
```

把这些行为都封装在命令类中：

```js
class RefreshMenuBarCommand {
  constructor(receiver) {
    this.receiver = receiver;
  }

  execute() {
    this.receiver.refresh()
  }
}

class AddSubMenuCommand {
  constructor(receiver) {
    this.receiver = receiver;
  }

  execute() {
    this.receiver.add()
  }
}

class DelSubMenuCommand {
  constructor(receiver) {
    this.receiver = receiver;
  }

  execute() {
    this.receiver.del()
  }
}
```

最后把命令接收者传入到 command 对象中，并且把 command 对象安装到 button 上面

```js
const refreshMenuBarCommand = new RefreshMenuBarCommand(MenuBar)
const addSubMenuCommand = new AddSubMenuCommand(SubMenu)
const delSubMenuCommand = new DelSubMenuCommand(SubMenu)

setCommand(btn1, refreshMenuBarCommand)
setCommand(btn2, addSubMenuCommand)
setCommand(btn3, delSubMenuCommand)
```
