---
sidebar_position: 4
---

# supabase 旅程目的地 - 权限认证

TODO

## 注册

注册功能涉及到邮箱密码和确认密码，我们需要实现一个 `apiSignup`，来到 supabase 的控制面板 API Docs 中，有一个 `User Management`，这里的 Sign up 模块可以看到是有提供一个使用邮箱注册的方法

![supabase-self-hosting20](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/framework/supabase/supabase-self-hosting20.jpg)

我们把这个方法复制下来，粘贴到我们的 `vue-version/src/services/apiSignup.js` 中，修改为传参形式并返回 data

```js
import supabase from "@/utils/supabase";

export async function signup(email, password) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    throw new Error(error?.message);
  }

  return data;
}
```

在 https://supabase.com/docs/reference/javascript/auth-signup 文档中我们可以找到添加额外元数据信息的参数，即 options，我们需要利用这个参数去获取用户头像

![supabase-self-hosting21](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/framework/supabase/supabase-self-hosting21.jpg)

修改`vue-version/src/services/apiSignup.js`代码如下

```js
import { getFakeAvatar } from "@/utils/employeeFakeHelper";
import supabase from "@/utils/supabase";

export async function signup(email, password) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        avatar: getFakeAvatar(),
      },
    },
  });

  if (error) {
    throw new Error(error?.message);
  }

  return data;
}
```
