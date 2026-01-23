---
title: "搭建前端工程项目 - 规范篇"

sidebar_position: 3
---

# 搭建前端工程项目 - 规范篇

## 前言

## 环境介绍

- OS：windows 10
- node: 14.15.1
- npm: 6.14.8

## 🎄 初始化项目

首先我们初始化项目，新建一个文件夹 npm 初始化，并在里面写一些代码

```bash
cd .\fe-demo\
pnpm init
```

![init-program](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/front-end-enginerring/build-frontend-project-standardization/init-program.png)

然后我们进行如下操作：

- 新建 `index.html` 文件
- 新建一个 `src` 目录并在里面创建 `index.js` 文件

```html
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

```js
const fn = () => {
  const a = 1;
  const b = 2;
  return a + b;
};
```

我们新建了两个文件，但是里面的代码风格看起来一言难尽，没关系，接下来我们会使用魔法改变他们 ✨

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

```html
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

```js
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

> [https://git-scm.com/docs/gitignore#\_pattern_format](https://git-scm.com/docs/gitignore#_pattern_format)

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

| options                      | type                                      | description                                                                                                                                                                                                                                                                                                                                                                                          |
| ---------------------------- | ----------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `printWidth`                 | `<int>`                                   | 每行代码长度，默认 `80`， 官方建议 `80` 及以上；在 `.editorconfig` 文件中设置 `max_line_length` 也会配置 `Prettier` 的 `printWidth`, 除非被覆盖                                                                                                                                                                                                                                                      |
| `tabWidth`                   | `<int>`                                   | 每个`tab`相当于多少个空格，默认 `2`；在 `.editorconfig` 文件中设置 `indent_size` 或者 `tab_width` 也会配置 `Prettier` 的 `tabWidth`, 除非被覆盖                                                                                                                                                                                                                                                      |
| `useTabs`                    | `<bool>`                                  | 使用 `tab` 代替 `space` 进行缩进，默认 `false`                                                                                                                                                                                                                                                                                                                                                       |
| `semi`                       | `<bool>`                                  | 每个语句结尾添加分号，默认 `true`                                                                                                                                                                                                                                                                                                                                                                    |
| `singleQuote`                | `<bool>`                                  | 使用单引号替代双引号，默认 `false`                                                                                                                                                                                                                                                                                                                                                                   |
| `quoteProps`                 | `as-needed` or `consistent` or `preserve` | 对象中属性 `key` 引号使用，默认 `as-needed`; `as-needed` 需要加引号才使用引号，`consistent` 有一个属性 `key` 需要加引号, 就给全部属性 `key` 都加引号；`preserve` 为遵循输入形式，不对对象的属性 `key` 做引号变更                                                                                                                                                                                     |
| `jsxSingleQuote`             | `<bool>`                                  | 默认 `false` ，在 JSX 中使用单引号代替双引号                                                                                                                                                                                                                                                                                                                                                         |
| `trailingComma`              | `es5`or`none`or`all`                      | 逗号结尾，默认 `es5` , `es5` 在 ES5 中有效的地方用逗号结尾(对象、数组等)。TypeScript 的类型参数中不允许带逗号; `none` 不尾随逗号； `all` 尽可能的尾随逗号                                                                                                                                                                                                                                            |
| `bracketSpacing`             | `<bool>`                                  | 对象中的空格，如 `false => {foo: bar}` ; `true => { foo: bar }`, 默认 `true`                                                                                                                                                                                                                                                                                                                         |
| `bracketSameLine`            | `<bool>`                                  | 把 `>` 放置在多行 `HTML (HTML, JSX, Vue, Angular)` 的末尾，而不是另起一行(不适用于自闭和元素) , 默认 `false`                                                                                                                                                                                                                                                                                         |
| 👎`jsxBracketSameLine`       | `<bool>`                                  | 把 `>` 放置在多行 `JSX` 的末尾，而不是另起一行(不适用于自闭和元素) , 默认 `false`                                                                                                                                                                                                                                                                                                                    |
| `arrowParens`                | `always`or`avoid`                         | 箭头函数参数包裹圆括号，默认 `always` `(x) => x`; `avoid` 即 `x => x`                                                                                                                                                                                                                                                                                                                                |
| `rangeStart`                 | `<int>`                                   | 格式化起始位置，只格式化某个文件的一部分；可以和 rangeEnd 用于从指定起止偏移字符(单独指定开始或结束、两者同时指定、分别指定)格式化代码，默认 `0`                                                                                                                                                                                                                                                     |
| `rangeEnd`                   | `<int>`                                   | 格式化结束位置，只格式化某个文件的一部分；可以和 rangeStart 用于从指定起止偏移字符(单独指定开始或结束、两者同时指定、分别指定)格式化代码，默认 `Infinity`                                                                                                                                                                                                                                            |
| `parser`                     | `<string> or require("./my-parser")`      | `解析器选择`                                                                                                                                                                                                                                                                                                                                                                                         |
| `filepath`                   | `<string>`                                | 默认 `None`, 指定要使用解析器的文件名                                                                                                                                                                                                                                                                                                                                                                |
| `requirePragma`              | `<bool>`                                  | 当设置为 `true` 时，在文件头部增加多行注释 `@prettier` 或者 `@format`，才会对文件进行格式化，在渐进进行格式化的大型复杂项目适用 , 默认 `false`                                                                                                                                                                                                                                                       |
| `insertPragma`               | `<bool>`                                  | 配置为 `true` 后，可以自动在文件头部增加 `@format` 多行注释， 默认为 `false`                                                                                                                                                                                                                                                                                                                         |
| `proseWrap`                  | `always`or`never`or`preserve`             | 默认情况下，`Prettier` 会因为使用了一些折行敏感型的渲染器（如`GitHub comment` 和 `BitBucket`）而按照`markdown`文本样式进行折行，但在某些情况下，我们可能只是希望这个文本在编译器或查看器中`soft-wrapping`（当屏幕放不下时发生的软折行），所以这一参数允许设置为 `never` ，默认为 `preserve` ； `always` 当超出 `print width`（上面有这个参数）时就折行；`never` 不折行； `perserve` 按照文件原样折行 |
| `htmlWhitespaceSensitivity`  | `css`or`strict`or`ignore`                 | 全局空格区域敏感度，针对 `HTML`, `Vue`, `Angular`,和 `Handlebars` ， 默认 `css` ； 举例 `ignore` 模式下，`div` 和 `span` 内容均被换行； `css` 模式下，只针对 `div` 进行换行； `strict` 模式下均不换行                                                                                                                                                                                                |
| `vueIndentScriptAndStyle`    | `<bool>`                                  | 是否对 `Vue` 文件中 `<script>` 和 `<style>` 标签内的内容进行格式化, 默认 `false`                                                                                                                                                                                                                                                                                                                     |
| `endOfLine`                  | `lf`or`crlf`or`cr`or`auto`                | 行结束格式， 默认 `lf` , `lf` => `\n` `Linux` 、 `macOS` `inside git repos` ； `crlf` => `\r\n` `windows` ; `cr` => `\r` 很少见 ； `auto` 遵循现有的 ; `.editorconfig` 中也可以设 `end_of_line` ，最终遵循 `Prettier`，除非被覆盖                                                                                                                                                                    |
| `embeddedLanguageFormatting` | `auto`or`off`                             | 是否将文件中嵌入的代码格式化，比如 `Markdown` 中的代码段, 默认 `auto`； `auto` => 如果能识别就格式化 ; `off` => 不格式化                                                                                                                                                                                                                                                                             |
| `singleAttributePerLine`     | `<bool>`                                  | 在`HTML`, `Vue`和`JSX`中强制每行只有一个属性，默认 `false`                                                                                                                                                                                                                                                                                                                                           |

> [https://prettier.io/docs/en/options.html](https://prettier.io/docs/en/options.html)

:::caution 注意

- `jsxBracketSameLine` option has been deprecated in v2.4.0, use --bracket-same-line instead
- `arrowParens` First available in `v1.9.0`, default value changed from `avoid` to `always` in `v2.0.0`
- `htmlWhitespaceSensitivity` 会受到 `vetur formatter` 的配置影响

:::

:::tip

`ESLint` 和 `prettier` 有很多重合的规则，配置起来相对繁琐， `ESLint` 带来了 `eslint-plugin-prettier`，它把 `prettier` 当作 `ESLint` 的一个插件，重合规则的部分遵循 `prettier`

:::

### 最佳实践

在了解了这些配置项后，到底如何配置才是我们的最优解呢？ 下面我们去看一些部分开源项目的配置，学习参考一下 🥳

#### Vue

```js
semi: false;
singleQuote: true;
printWidth: 80;
trailingComma: "none";
arrowParens: "avoid";
```

#### react

```js
"use strict";

const { esNextPaths } = require("./scripts/shared/pathsByLanguageVersion");

module.exports = {
  bracketSpacing: false,
  singleQuote: true,
  jsxBracketSameLine: true,
  trailingComma: "es5",
  printWidth: 80,
  parser: "babel",

  overrides: [
    {
      files: esNextPaths,
      options: {
        trailingComma: "all",
      },
    },
  ],
};
```

#### react-native

```json
{
  "arrowParens": "avoid",
  "bracketSameLine": true,
  "bracketSpacing": false,
  "requirePragma": true,
  "singleQuote": true,
  "trailingComma": "all"
}
```

#### jest

```json
{
  "bracketSpacing": false,
  "proseWrap": "never",
  "singleQuote": true,
  "trailingComma": "all",
  "arrowParens": "avoid",
  "overrides": [
    {
      "files": "website/**/*.js",
      "options": {
        "trailingComma": "es5"
      }
    },
    {
      "files": [
        "lerna.json",
        "website/sidebars.json",
        "website/versioned_sidebars/*.json"
      ],
      "options": {
        "parser": "json-stringify"
      }
    },
    {
      "files": ".yarnrc.yml",
      "options": {
        "singleQuote": false
      }
    },
    {
      "files": ["docs/*.md", "website/versioned_docs/*/*.md"],
      "options": {
        "parser": "mdx"
      }
    }
  ]
}
```

#### ant-design

```js
{
  "singleQuote": true,
  "trailingComma": "all",
  "printWidth": 100,
  "proseWrap": "never",
  "arrowParens": "avoid",
  "overrides": [
    {
      "files": ".prettierrc",
      "options": {
        "parser": "json"
      }
    }
  ]
}
```

#### vite

```json
{
  "semi": false,
  "tabWidth": 2,
  "singleQuote": true,
  "printWidth": 80,
  "trailingComma": "none",
  "overrides": [
    {
      "files": ["*.json5"],
      "options": {
        "singleQuote": false,
        "quoteProps": "preserve"
      }
    },
    {
      "files": ["*.yml"],
      "options": {
        "singleQuote": false
      }
    }
  ]
}
```

#### taro-ui

```json
{
  "tabWidth": 2,
  "useTabs": false,
  "semi": false,
  "singleQuote": true,
  "jsxSingleQuote": true,
  "trailingComma": "none",
  "bracketSpacing": true,
  "jsxBracketSameLine": false,
  "arrowParens": "avoid"
}
```

#### docusaurus

```json
{
  "arrowParens": "always",
  "bracketSpacing": false,
  "bracketSameLine": true,
  "printWidth": 80,
  "proseWrap": "never",
  "singleQuote": true,
  "trailingComma": "all"
}
```

#### wangEditor

```js
module.exports = {
  // 箭头函数只有一个参数的时候可以忽略括号
  arrowParens: "avoid",
  // 括号内部不要出现空格
  bracketSpacing: true,
  // 行结束符使用 Unix 格式
  endOfLine: "lf",
  // true: Put > on the last line instead of at a new line
  jsxBracketSameLine: false,
  // 行宽
  printWidth: 100,
  // 换行方式
  proseWrap: "preserve",
  // 分号
  semi: false,
  // 使用单引号
  singleQuote: true,
  // 缩进
  tabWidth: 2,
  // 使用 tab 缩进
  useTabs: false,
  // 后置逗号，多行对象、数组在最后一行增加逗号
  trailingComma: "es5",
  parser: "typescript",
};
```

汇总一下看看(没有配置取默认值的用`()`包裹标注了)：

![compare-prettier](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/leetcode/climbing-stairs/compare-prettier.png)

通过表格，可以看出这几个配置项出现频率较多

- `semi` : 每个语句结尾添加分号，`true` `false` 参半
- `singleQuote` : 使用单引号替代双引号, 清一色的 `true`
- `trailingComma` : 追加逗号结尾， `es5` `all` `none` 均有
- `arrowParens` : 箭头函数参数包裹圆括号 `always` `avoid` 参半
- `bracketSpacing` : 对象中的空格 `true` `false` 参半
- `bracketSameLine` : 把 `>` 放置在多行 `HTML (HTML, JSX, Vue, Angular)` 的末尾，而不是另起一行(不适用于自闭和元素) `true` `false` 参半
- `proseWrap` : 在编译器或查看器当屏幕放不下时发生的软折行，`never` 和 默认 `css`

最佳实践还是需要具体项目具体分析

个人如果搭建单页面项目可能会这样配置：

```js
module.exports = {
  // 每个语句结尾添加分号
  semi: false,
  // 使用单引号替代双引号
  singleQuote: true,
  // 追加逗号结尾
  trailingComma: "all",
  // 箭头函数参数包裹圆括号
  arrowParens: "avoid",
  // 对象中的空格
  bracketSpacing: true,
  // 在编译器或查看器当屏幕放不下时发生的软折行
  proseWrap: "never",
};
```

## ESLint

### ESLint 是什么

官网给的定义是 **可组装的 JavaScript 和 JSX 检查工具**

ESLint 是一个开源的 JavaScript 代码检查工具，由 Nicholas C. Zakas 于 2013 年 6 月创建。代码检查是一种静态的分析，常用于寻找有问题的模式或者代码，并且不依赖于具体的编码风格。对大多数编程语言来说都会有代码检查，一般来说编译程序会内置检查工具

### 为什么要使用 ESLint

JavaScript 是一个动态的弱类型语言，在开发中比较容易出错。因为没有编译程序，为了寻找 JavaScript 代码错误通常需要在执行过程中不断调试。像 ESLint 这样的可以让程序员在编码的过程中发现问题而不是在执行的过程中

ESLint 的初衷是为了让程序员可以创建自己的检测规则。ESLint 的所有规则都被设计成可插入的。ESLint 的默认规则与其他的插件并没有什么区别，规则本身和测试可以依赖于同样的模式。为了便于人们使用，ESLint 内置了一些规则，当然，你可以在使用过程中自定义规则

> [https://cn.eslint.org/docs/about/](https://cn.eslint.org/docs/about/)

### ESLint 小试牛刀

来到我们之前的项目，安装 `ESLint` 并初始化配置 ~

```bash
pnpm install eslint -D
pnpm eslint --init
```

初始化的时候插件会让我们选择一些基础配置，最后生成 `.eslintrc.js` 文件

```js
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:vue/vue3-essential"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["vue"],
  rules: {
    indent: ["error", "space"],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "single"],
    semi: ["error", "never"],
  },
};
```

继续在项目根目录创建一个 .eslintignore 文件，当 ESLint 运行时，在确定哪些文件要检测之前，它会在当前工作目录中查找一个 .eslintignore 文件

如果没有发现 .eslintignore 文件，也没有指定替代文件，ESLint 将在 package.json 文件中查找 eslintIgnore 键，来检查要忽略的文件。

```json
{
  "name": "mypackage",
  "version": "0.0.1",
  "eslintConfig": {
    "env": {
      "browser": true,
      "node": true
    }
  },
  "eslintIgnore": ["hello.js", "world.js"]
}
```

下面来了解一些常用的配置~ gogogo 🛵

### 基础配置 🌟

#### `env`

指定你想启用的环境，并设置它们为 `true`
如果我们需要在一个特定插件中使用一种环境，需要确保在 `plugins` 数组中指定插件名，然后在 `env` 配置中不带前缀的插件名后追加一个 `/`,紧随环境名

```json title=".eslintrc"
{
  "plugins": ["example"],
  "env": {
    "example/custom": true
  }
}
```

或者在 package.json 中配置

```json title="package.json"
{
  "name": "mypackage",
  "version": "0.0.1",
  "eslintConfig": {
    "plugins": ["example"],
    "env": {
      "example/custom": true
    }
  }
}
```

#### `globals`

当访问当前源文件内未定义的变量时，`no-undef` 规则将发出警告
如果我们想在一个源文件中使用未在当前源文件中定义的全局变量，有两种方式解决：

- 在 JavaScript 文件中，使用注释指定全局变量

```js
/* global var1, var2 */
```

- 如果需要选择性地指定相关全局变量可以被写入（不是只读），需要加上 `"writable"`的标识

```js
/* global var1:writable, var2:writable */
```

- 在 `.eslintrc` 文件中配置 `globals`, 该属性设置为一个对象, `key` 为全局变量, `value` 为设置是否允许重写变量, `"writable"` 为可重写, `"readonly"` 为只读, `"off"` 为禁用

```json
{
  "globals": {
    "var1": "writable",
    "var2": "readonly"
  }
}
```

#### `plugins`

引入第三方 eslint 插件，使用之前必须使用 npm 安装，插件名称可以省略 `eslint-plugin-` 前缀

#### `rules`

eslint 有灰常多灰常多的规则，我们可以使用注释或者配置文件进行更改
`rule` 严重程度参数说明：

- `"off"` 或 `0` - 关闭规则
- `"warn"` 或 `1` - 开启规则，使用警告级别的错误：`warn` (不会导致程序退出)
- `"error"` 或 `2` - 开启规则，使用错误级别的错误：`error` (当被触发的时候，程序会退出)

`value` 配置为数组可以配置规则额外的选项，其中数组的第一项是规则的严重程度, 如果需要配置定义在插件中的一个规则的时候，需要使用 `插件名/规则ID` 的形式

```json
{
  "rules": {
    "eqeqeq": "off",
    "curly": "error",
    "quotes": ["error", "double"],
    "plugin1/rule1": "error"
  }
}
```

`rules` 属性可以用来拓展或覆盖规则

- 启用额外的规则
- 改变继承的规则级别而不改变它的选项：
  - 基础配置：`"eqeqeq": ["error", "allow-null"]`
  - 派生的配置：`"eqeqeq": "warn"`
  - 最后生成的配置：`"eqeqeq": ["warn", "allow-null"]`
- 覆盖基础配置中的规则的选项
  - 基础配置：`"quotes": ["error", "single", "avoid-escape"]`
  - 派生的配置：`"quotes": ["error", "single"]`
  - 最后生成的配置：`"quotes": ["error", "single"]`

:::caution 注意

当指定来自插件的规则时，确保删除 `eslint-plugin-` 前缀。ESLint 在内部只使用没有前缀的名称去定位规则

:::

#### `root`

默认情况下，`ESLint` 会在所有父级目录里寻找配置文件，一直到根目录。为了将 `ESLint` 限制到一个特定的项目，在你项目根目录下的 `package.json` 文件或者 `.eslintrc.*` 文件里的 `eslintConfig` 字段下设置 `"root": true`。`ESLint` 一旦发现配置文件中有 `"root": true`，它就会停止在父级目录中寻找

```json
{
  "root": true
}
```

#### `extends`

一个配置文件可以被基础配置中的已启用的规则继承

属性值可以是:

- 指定配置的字符串(配置文件的路径、可共享配置的名称、`eslint:recommended` 或 `eslint:all`)
- 字符串数组：每个配置继承它前面的配置

值为 `"eslint:recommended"` 的 `extends` 属性启用一系列核心规则，这些规则报告一些常见问题

> [https://cn.eslint.org/docs/rules/](https://cn.eslint.org/docs/rules/)

#### `parserOptions`

设置解析器，常用的属性有：

- `ecmaVersion` : 默认 5 ，用来指定你想要使用的 ECMAScript 版本，可以用使用年份命名的版本号指定为 2015（同 6），2016（同 7），或 2017（同 8）或 2018（同 9）或 2019 (同 10)
- `sourceType` : `"script"` 或 `"module"`, 默认为 `script`
- `ecmaFeatures` : 配置使用的额外的语言特性, `value` 为 `true` or `false`
  - `globalReturn` - 允许在全局作用域下使用 `return` 语句
  - `impliedStrict` - 启用全局 `strict mode` (如果 `ecmaVersion` 是 `5` 或更高)
  - `jsx` - 启用 `JSX`
  - `experimentalObjectRestSpread` - 不建议使用，启用实验性的 `object rest/spread properties` 支持

#### `parser`

`parser` 和 `parserOptions` 需**同时使用**

<!-- - `env` : 指定你想启用的环境，并设置它们为 `true` -->
<!-- - `extends` : 一个配置文件可以被基础配置中的已启用的规则继承 -->

- `overrides` : 覆盖原有规则进行一些特殊处理
  <!-- - `parserOptions` : 解析器配置 -->
  <!-- - `plugins` : 引入的 `eslint` 插件 -->
- `rules` : 自定义规则
<!-- - `globals` : 脚本在执行期间访问的额外的全局变量 -->
- `settings`
- `parser`
<!-- - `root`   -->
- `reportUnusedDisableDirectives`

:::caution 注意

如果同一目录下 .eslintrc 和 package.json 同时存在，.eslintrc 优先级高会被使用，package.json 文件将不会被使用

:::

TODO import/resolver':

配置完 .eslintrc 后我们需要到 package.json 中增加 lint 命令

```json
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "lint": "eslint . --ext .vue,.js,.ts,.jsx,.tsx --fix",
},
```

## eslint-config-prettier 🙌 eslint-plugin-prettier

前面提到了`ESLint` 和 `prettier` 有很多重合的规则，甚至这俩会相互打架，影响我们的配置工作

### eslint-config-prettier

让所有与 Prettier 规则存在冲突的 eslint rules 失效，并遵循 Prettier 的规则，也就是使用 Prettier 的规则覆盖掉 eslint:recommended 的部分规则

### eslint-plugin-prettier

把 `prettier` 当作 `ESLint` 的一个插件，重合规则的部分遵循 `prettier`

## stylelint

## editorconfig

## lint-staged

## commitlint

## husky

## babel

## 共享配置
