---
sidebar_position: 3
---

# supabase 旅程目的地 - 插入&读取操作

项目地址 [https://github.com/fxpby/person-management](https://github.com/fxpby/person-management)

可以先克隆项目到本地，进入 helper 目录使用小包子执行 install

```ts
bun install
```

## 插入操作

首先打开`helper/utils/supabase.ts`文件，使用之前的`SERVICE_ROLE_KEY`填入`supabaseKey`

这个 helper 项目是用来帮助我们快捷插入通过 `fakerjs` 对应 API 获取的虚拟数据，毕竟一条条手动输入，太麻烦了

```ts
import { createClient } from "@supabase/supabase-js";
const supabaseUrl = process.env.SUPABASE_URL || "";
console.log("supabaseUrl: ", supabaseUrl);

// TODO: set your own supabase key
const supabaseKey = "";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
```

填好后我们使用小包子 `bun` 来跑这个 helper 项目

```bash
bun index.ts
```

![supabase-self-hosting15](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/framework/supabase/supabase-self-hosting15.jpg)

来到面板可以很清晰看到我们生成的数据插入成功~

![supabase-self-hosting16](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/framework/supabase/supabase-self-hosting16.jpg)

## 读取操作

supabase 不仅仅是一个数据库，更是基于我们创建好的数据库的定义，以及数据库中的数据

它自动生成了对应的一些 API 接口,并且将这些 API 接口对应的一些前端的请求代码也都内置在了里面，而且它是动态生成的

比如刚才我们刚开始创建好这个 supabase 管理面板的时候，它是没有这个 employee 表,也没有任何数据的。但我们创建好这样一张表，创建好这样一些数据之后

在左边找到 API Docs，可以看到这里多了一个 employee 的选项，点击可以看到这里的其实就直接给我们提供了所有的基于这张 employee 表的增删改查的一些代码。并且这是它自动生成的，可以看到甚至细化到了每一个对应的字段中，非常的智能

![supabase-self-hosting17](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/framework/supabase/supabase-self-hosting17.jpg)

看右侧代码，我们会发现所有的数据都来自于 supabase 实例，那么这个实例在哪里呢

还是 API Docs 面板，Getting Started - Introduction 这里有几行代码我们复制下来，在项目`vue-version/src/utils`目录下新建`supabase.js`文件，将代码粘贴进去

![supabase-self-hosting18](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/framework/supabase/supabase-self-hosting18.jpg)

再添加安装 sdk 文件包

```bash
pnpm add @supabase/supabase-js
```

来到`vue-version/.env`文件中填写我们的配置`VITE_SUPABASE_URL`和`VITE_SUPABASE_KEY`,`VITE_SUPABASE_KEY`还是之前的`SERVICE_ROLE_KEY`，`VITE_SUPABASE_AUTH_KEY`是登录认证相关字段，后面旅程再来探索

```env
# SUPABASE config
VITE_SUPABASE_URL=http://localhost:8000
VITE_SUPABASE_KEY=xxxxxxxx
VITE_SUPABASE_AUTH_KEY=
```

再来到 supabase.js 文件中修改代码如下，我们从配置文件读取后再将实例导出

```js
import { createClient } from "@supabase/supabase-js";
import { getConfig } from "./configHelper";

const supabaseUrl = getConfig("SUPABASE_URL");
const supabaseKey = getConfig("SUPABASE_KEY");
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
```

配置好后跑前端项目咯~

```bash
pnpm run dev
```

跑起来后来到`vue-version/src/services/apiEmployee.js`文件中，将我们的 supabase 实例导入

```js
export async function getEmployees() {
  // Mock employees with faker js
  const { data: employees, error } = await supabase
    .from("employee")
    .select("*");

  if (error) {
    throw new Error(error.message);
  }
  return employees;
}
```

访问项目地址 http://localhost:5173/ 即可看到加载数据如下，和我们之前插入的数据是对得上的

![supabase-self-hosting19](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/framework/supabase/supabase-self-hosting19.jpg)

至此我们就成功地从 supabase 中读取了对应的数据，对应的读取逻辑其实就是 supabase docs 给我们提供了这样一些调用 SDK 代码

通过 supabase 的 SDK 可以直接获取数据库中的数据，而不再需要我们去和后端对接。我们只需要处理好渲染逻辑就可以，美滋滋~
