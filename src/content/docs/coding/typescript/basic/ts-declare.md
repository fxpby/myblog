---
id: ts-declare
title: 声明文件 d.ts
tags:
  - TypeScript
---

## 声明文件 declare

使用三方库时，需要引入声明文件才能获得对应的代码补全和接口提示相关内容

比如在项目中写

```ts
import axios from 'axios'
```

按住 Ctrl/command 键点击 'axios' 会进入到它的声明文件中

有一些比较老的库可能没有相关的 xxx.d.ts 文件，我们可以自己编写, 如 express

```ts title="express.d.tsc"
declare module 'express' {
  interface Express {
    (): void
  }
  // ...
  const express: Express
  export default express
}
```

还可以尝试使用命令安装

```shell
npm i --save-dev @types/express
```
