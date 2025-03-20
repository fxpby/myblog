---
id: jsdoc
title: jsdoc
tags:
  - 工程化
---

## 

插件 eslint-plugin-jsdoc

.eslintrc.js

```js
overrides: [
    {
      files: ['src/services/**/*.js', 'src/pages/**/store.js'],
      plugins: ['jsdoc'],
      extends: ['plugin:jsdoc/recommended', 'plugin:jsdoc/recommended-error'],
      rules: {
        'jsdoc/require-jsdoc': [
          'error',
          {
            require: {
              FunctionDeclaration: true,
              FunctionExpression: true,
              MethodDefinition: true,
            },
          },
        ],
      },
    },
  ],
```