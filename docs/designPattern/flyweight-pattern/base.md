# 享元模式

## 介绍

- 共享内容(减少内存开销)
- 相同的数据，共享使用

## 示例

### 服装厂模特拍广告

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

### 图书馆入库书籍

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

  const book = new Book(title, author, isbn)
  isbnNumbers.add(isbn)

  return book
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

## 设计原则验证

- 将相同的部分抽象出来
- 符合开放封闭原则
