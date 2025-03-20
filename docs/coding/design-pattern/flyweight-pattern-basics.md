# 享元模式

## 介绍

- 共享内容(减少内存开销)
- 相同的数据，共享使用

## 示例

### 👩🏼‍🤝‍🧑🏻服装厂模特拍广告

假设有一个服装工厂，目前有 50 种男士服装和 50 种女士服装。为了推销商品，工厂决定生产一些塑料模特来穿服装拍广告照片。正常情况需要 50 个男模特和 50 个女模特，然后每一位穿一件服装来拍照，如下👇🏻

```js
class Modal {
  constructor(sex, clothes) {
    this.sex = sex
    this.clothes = clothes
  }

  takePhoto() {
    console.log(`sex: ${this.sex}, clothes: ${this.clothes}`)
  }
}

for(let i = 0; i <= 50; i +=1 ) {
  const maleModel = new Modal('male', 'clothes' + i)
  maleModel.takePhoto()
}

for(let j = 0; j <= 50; j +=1 ) {
  const femaleModel = new Modal('female', 'clothes' + j)
  femaleModel.takePhoto()
}
```

这样的话，目前一共 50 种男衣服，50 种女衣服，一共产生 100 个对象。如果生产规模扩大，生产 10000 种衣服，那么程序岂不是鸭梨山大崩溃了。
其实我们并不需要这么多塑料模特，男模特和女模特各一个就可以了，每次穿不同衣服进行拍照。

```js
class Model {
  constructor(sex) {
    this.sex = sex
  }

  takePhoto() {
    console.log(`sex: ${this.sex}, clothes: ${this.clothes}`)
  }
}

const maleModel = new Model('male')
const femaleModel = new Model('female')

for(let i = 0; i <= 50; i += 1 ) {
  maleModel.clothes = `clothes${i}`
  maleModel.takePhoto()
}

for(let j = 0; j <= 50; j += 1 ) {
  femaleModel.clothes = `clothes${j}`
  femaleModel.takePhoto()
}
```

### 📚图书馆入库书籍

图书馆同样的书（ISBN号相同）可能存有很多本，我们不希望每次入库一本书都创建一个新的 book 实例，我们只想为ISBN号相同的书创建一个 book 实例。

```js
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn
  }
}
```

在入库书的时候，如果库中已经有相同的 ISBN 号的书，那么我们就不希望再创建一个完全一样的 book 实例了。

```js
const isbnNumbers = new Set();

const createBook = (title, author, isbn) => {
  const book = isbnNumbers.has(isbn)

  if (book) {
    return book
  }

  isbnNumbers.add(isbn)

  return new Book(title, author, isbn)
}
```

通过 createBook 方法我们可以为相同的书创建一个 book 实例，一个图书馆通常同一本书会有很多副本，然后让我们编写一个书籍入库方法，返回一个新的 book 实例或者返回 已存在的 book 实例

```js
const bookList = []
const addBook = (title, author, isbn, availibility, sales) => {
  const book = {
    ...createBook(title, author, isbn),
    sales,
    availibility,
    isbn
  }

  bookList.push(book)
  reutrn book
}
```

测试一下，我们入库 5 本书，其中有 2 本各有 1 本相同。

```js
addBook('Book1', 'author1', 'AB123', false, 100)
addBook('Book1', 'author1', 'AB123', true, 80)
addBook('Book2', 'author2', 'CD456', true, 100)
addBook('Book2', 'author2', 'CD456', false, 200)
addBook('Book3', 'author3', 'EF789', false, 100)
```

最终代码如下

```js
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn
  }
}

const bookList = []

const addBook = (title, author, isbn, availibility, sales) => {
  const book = {
    ...createBook(title, author, isbn),
    sales,
    availibility,
    isbn
  }

  bookList.push(book)

  return book
}

const isbnNumbers = new Set();

const createBook = (title, author, isbn) => {
  const book = isbnNumbers.has(isbn)

  if (book) {
    return book
  }

  isbnNumbers.add(isbn)

  return new Book(title, author, isbn)
}

addBook('Book1', 'author1', 'AB123', false, 100)
addBook('Book1', 'author1', 'AB123', true, 80)
addBook('Book2', 'author2', 'CD456', true, 100)
addBook('Book2', 'author2', 'CD456', false, 200)
addBook('Book3', 'author3', 'EF789', false, 100)

console.log(`Total amount of copies: ${bookList.length}`)
console.log(`Total amount of books: ${isbnNumbers.size}`)

// Total amount of copies: 5
// Total amount of books: 3
```

### 💻文件上传

假设文件只有浏览器插件和表单上传两种方式，用户选择文件之后，插件和表单都会通知调用 Window 下的一个全局函数，叫做 startUpload, 用户选择的文件列表被组合成一个数组 files 塞入参数列表中。

```js
let id = 0;
window.startUpload = (uploadType, files) => {
  files.forEach(file => {
    const uploadObj = new Upload(uploadType, file.fileName, file.fileSize)
    uploadObj.init(id++)
  })
}

class Upload {
  constructor(uploadType, fileName, fileSize) {
    this.uploadType = uploadType
    this.fileName = fileName
    this.fileSize = fileSize
    this.dom = null
  }

  init(id) {
    this.id = id
    this.dom = document.createElement("div")
    this.dom.innerHTML = `
      <span> 文件名称： ${this.fileName}, 文件大小：${this.fileSize} kb </span> <button class="del-file"> 删除 </button>
    `
    this.dom.querySelector('.del-file').onclick = () => {this.delFile()}
    document.body.appendChild(this.dom)
  }

  delFile() {
    // 文件小于 3000 kb 时，直接删除
    if (this.fileSize < 3000) {
      return this.dom.parentNode.removeChild(this.dom)
    }

    // 提示框提示删除
    if (window.confirm('确定要删除该文件吗？'+ this.fileName)) {
      return this.dom.parentNode.removeChild(this.dom)
    }
  }
}

// 创建 3 个插件上传对象和 3 个表单上传对象
startUpload('plugin', [
  {
    fileName: '1.txt',
    fileSize: 1000
  },
  {
    fileName: '2.txt',
    fileSize: 3000,
  },
  {
    fileName: '3.txt',
    fileSize: 5000,
  }
])

startUpload('form', [
  {
    fileName: '4.txt',
    fileSize: 1000
  },
  {
    fileName: '5.txt',
    fileSize: 3000,
  },
  {
    fileName: '6.txt',
    fileSize: 5000,
  }
])
```

上段代码中，需要上传多少文件，就创建了多少个 upload 对象。

首先需要判断一下是内部状态还是外部状态

- 内部状态储存于对象内部
- 内部状态可以被一些对象共享
- 内部状态独立于具体的场景，通常不会改变
- 外部状态取决于具体的场景，并根据场景而变化，外部状态不能被共享

在这个上传的例子中，`uploadType` 是 `Upload` 所必需依赖的属性（不同类型的上传方式原理不同）; `fileName` 和 `fileSize` 是不会被共享的，所以划分为外部状态

下面使用享元模式重构一下：

```js
class Upload {
  constructor(uploadType) {
    this.uploadType = uploadType
  }

  delFile(id) {
    uploadManager.setExternalState(id, this)
    // 文件小于 3000 kb 时，直接删除
    if (this.fileSize < 3000) {
      return this.dom.parentNode.removeChild(this.dom)
    }

    // 提示框提示删除
    if (window.confirm('确定要删除该文件吗？'+ this.fileName)) {
      return this.dom.parentNode.removeChild(this.dom)
    }
  }
}

class uploadManager {
  constructor() {
    this.uploadDatabase = {}
  }
}
```

## 设计原则验证

- 将相同的部分抽象出来
- 符合开放封闭原则
