---
id: npm-scoped-packages
title: npm 作用域包
tags:
  - npm
  - scoped packages
---

## npm 包前加`@`是什么意思

npm 包前加 `@` 代表 `scope` 相关的包，即 `作用域包` ,我们可以利用这个 `scope` 创建和其他用户或组织同名的包，并且不会产生冲突
> Every organization is granted an organization scope, a unique namespace for packages owned by the organization that matches the organization name.
> <https://docs.npmjs.com/about-organization-scopes-and-packages>
> <https://docs.npmjs.com/cli/v8/using-npm/scope>

作用域名称就是`@`至`/`之间的所有内容

```js
// npm scope
@npm/package-name

// olu scope
@olu/package-name

// icecream scope
@icecream/package-name
```

> When used in package names, scopes are preceded by an @ symbol and followed by a slash.

## npm 作用域包的意义

npm 包名很容易发生被占用的问题，作用域包就类似于创建了一个命名空间，不同的命名空间可以使用相同的包名
