---
sidebar_position: 3
---

# supabase 旅程目的地 - 插入&读取操作

TODO

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
