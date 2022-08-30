---
id: build-frontend-project-standardization
title: 搭建前端工程项目 - 规范篇
tags:
  - 工程化
---

## 前言

## 环境介绍

- OS：window 10
- node: 14.15.1
- npm: 6.14.8

## 🎄初始化项目

首先我们初始化项目，新建一个文件夹 npm 初始化，并在里面写一些代码

```bash
cd .\fe-demo\
pnpm init
```

![init-program](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/front-end-enginerring/build-frontend-project-standardization/init-program.png)

然后我们进行如下操作：

- 新建 `index.html` 文件
- 新建一个 `src` 目录并在里面创建 `index.js` 文件

```html title="index.html"
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>fe-demo</title>
</head>
<body>
  <h1>hello, world</h1><p>我没有换行哦</p>
</body>
</html>
```

```js title="src/index.js"
const fn = () => {
const a=1
             const b=2
  return   a+   b
}
```

我们新建了两个文件，但是里面的代码风格看起来一言难尽，没关系，接下来我们会使用魔法改变他们✨

## 📐Prettier

### Prettier 是什么

`Prettier` 可以格式化我们的代码片段，官网上指出支持的格式有：

- JavaScript (including experimental features)
- JSX
- Angular
- Vue
- Flow
- TypeScript
- CSS, Less, and SCSS
- HTML
- Ember/Handlebars
- JSON
- GraphQL
- Markdown, including GFM and MDX
- YAML

### 为什么要使用 Prettier

- Building and enforcing a style guide
- Helping Newcomers
- Writing code
- Easy to adopt
- Clean up an existing codebase
- Ride the hype train

### Prettier 小试牛刀

来到我们刚才初始化的项目，安装我们的 `Prettier` 插件吧

```bash
pnpm install prettier -D
```

见证奇迹的时刻到了，我们执行命令, 该命令会格式化所有文件

```bash
pnpm prettier --write .
```

啊这，一定是魔法，我们的两个文件分别变成了这个样子，发现`index.html`中的`p标签`换行了，`src/index.js` 中的变量两端都加上了空格

```html title="index.html"
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>fe-demo</title>
  </head>
  <body>
    <h1>hello, world</h1>
    <p>我没有换行哦</p>
  </body>
</html>
```

```js title="src/index.js"
const fn = () => {
  const a = 1;
  const b = 2;
  return a + b;
};
```

### 配置文件

- 在项目根目录下新建 `.prettierrc` 文件，`js`、`json` 或者 `yaml` 文件均可
  - A "prettier" key in your package.json file.
  - A .prettierrc file written in JSON or YAML.
  - A .prettierrc.json, .prettierrc.yml, .prettierrc.yaml, or .prettierrc.json5 file.
  - A .prettierrc.js, .prettierrc.cjs, prettier.config.js, or prettier.config.cjs file that **exports an object using module.exports**.
  - A .prettierrc.toml file.
- 继续新建 `.prettierignore` 文件，这个文件的作用是使我们的格式化操作**忽略**包含的文件或文件夹,`.prettierignore` 文件使用 `gitignore syntax` 语法编写

> <https://git-scm.com/docs/gitignore#_pattern_format>

### 基础配置

JSON:

```json
{
  "trailingComma": "es5",
  "tabWidth": 4,
  "semi": false,
  "singleQuote": true
}
```

JS:

```js
// prettier.config.js or .prettierrc.js
module.exports = {
  trailingComma: "es5",
  tabWidth: 4,
  semi: false,
  singleQuote: true,
};
```

YAML:

```yaml
# .prettierrc or .prettierrc.yaml
trailingComma: "es5"
tabWidth: 4
semi: false
singleQuote: true
```

### overrides 覆盖配置

overrides 配置可以让我们覆盖原有规则进行一些特殊处理，需要注意的是，`file` 的 `value` 格式支持为 `string` 或者 `[]string`

举个栗子，按照下方配置写的话，`*.test.js` 、 `*.html` 和 `legacy/**/*.js` 就会遵循 `overrides` 中的配置

```json
{
  "semi": false,
  "overrides": [
    {
      "files": "*.test.js",
      "options": {
        "semi": true
      }
    },
    {
      "files": ["*.html", "legacy/**/*.js"],
      "options": {
        "tabWidth": 4
      }
    }
  ]
}
```

### 格式化选项

| options | type | description |
| --- | --- | --- |
| `printWidth` | `<int>` | 每行代码长度，默认 80， 官方建议 80 及以上；在 `.editorconfig` 文件中设置 `max_line_length` 也会配置 `Prettier` 的 `printWidth`, 除非被覆盖 |
| `tabWidth` | `<int>` | 每个`tab`相当于多少个空格，默认 2；在 `.editorconfig` 文件中设置 `indent_size` 或者 `tab_width` 也会配置 `Prettier` 的 `tabWidth`, 除非被覆盖 |
| `Tabs` | `<bool>` | 使用 `tab` 代替 `space` 进行缩进，默认 `false` |

TODO
> <https://prettier.io/docs/en/options.html>

:::tip

`ESLint` 和 `prettier` 有很多重合的规则，配置起来相对繁琐， `ESLint` 带来了 `eslint-plugin-prettier`，它把 `prettier` 当作 `ESLint` 的一个插件，重合规则的部分遵循 `prettier`

:::

### 共享配置

需要在 `package.json` 中配置一些项

## stylelint

## ESLint

## lint-staged

## commitlint

## husky

## babel
