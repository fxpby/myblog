---
id: environment-deploy
title: 多环境部署
tags:
  - 工程化
  - 部署
---

## 环境的设置

### 常用环境

#### dev

开发联调自测环境

#### test

测试环境，相对稳定

#### pre

预发环境，数据真实，使用线上数据库

#### prod

生产环境

## 环境的隔离和切换

### 域名隔离

- 通过切换访问服务的域名，来切换环境
- 服务之间的转跳、调用需严格遵守域名约定
- 非生产环境和生产环境域名不同，可能代码中需要特殊处理（如 cookie 域区分环境）

product-a.corp.com

- dev: product-a.dev.corp.com
- test: product-a.test.corp.com

或者

- dev: product-a-dev.corp.com
- test: product-a-test.corp.com

### Hosts 隔离

- 通过切换服务域名对应的 hosts 切换环境
- 维护多份 hosts 映射需要成本
- 不同环境同域名可能造成账号互踢、cookie 异常等问题

举例 product-a.crop.com

```shell
# dev
192.168.60.5 product-a.crop.com
192.168.60.5 product-b.crop.com
192.168.60.5 product-c.crop.com
```

```shell
# test
192.168.60.6 product-a.crop.com
192.168.60.6 product-b.crop.com
192.168.60.6 product-c.crop.com
```

## 多环境的配置

### egg.js

- config.default.js
- config.dev.js
- config.local.js
- config.prod.js
- config.test.js

default 为默认配置，环境变量 `EGG_SERVER_ENV` 控制配置加载具体应用的环境配置为 `config.[EGG_SERVER_ENV].js` 和 `config.default.js` 深度合并

### vite

实现一个配置加载机制

```js title="packages/@vue/cli-service/lib/Service.js"
loadEnv (mode) {
  const logger = debug('vue:env')
  const basePath = path.resolve(this.context, `.env${mode ? `.${mode}` : ``}`)
  const localPath = `${basePath}.local`

  const load = envPath => {
    try {
      const env = dotenv.config({ path: envPath, debug: process.env.DEBUG })
      dotenvExpand(env)
      logger(envPath, env)
    } catch (err) {
      // only ignore error if file is not found
      if (err.toString().indexOf('ENOENT') < 0) {
        error(err)
      }
    }
  }
}
```

```js title="packages/@vue/cli-service/lib/Service.js"
init (mode = process.env.VUE_CLI_MODE) {
  if (this.initialized) {
    return
  }
  this.initialized = true
  this.mode = mode

  // load mode .env
  if (mode) {
    this.loadEnv(mode)
  }
  // load base .env
  this.loadEnv()
}
```

```js title="packages/@vue/cli-service/webpack.config.js"
// this file is for cases where we need to access the
// webpack config as a file when using CLI commands.

let service = process.VUE_CLI_SERVICE;

if (!service || process.env.VUE_CLI_API_MODE) {
  const Service = require('./lib/Service');
  service = new Service(process.env.VUE_CLI_CONTEXT || process.cwd());
  service.init(process.env.VUE_CLI_MODE || process.env.NODE_ENV);
}

module.exports = service.resolveWebpackConfig();
```
