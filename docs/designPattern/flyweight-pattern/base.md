# 享元模式

## 介绍

- 共享内容(减少内存开销)
- 相同的数据，共享使用

## 示例

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

## 设计原则验证

- 将相同的部分抽象出来
- 符合开放封闭原则