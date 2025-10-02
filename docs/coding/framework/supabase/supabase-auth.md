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

我们可以从 https://temp-mail.org/ 这个网址获取临时邮箱

![supabase-self-hosting22](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/framework/supabase/supabase-self-hosting22.jpg)

此时来到我们项目的注册窗口，使用这个临时邮箱来注册一个账号

![supabase-self-hosting23](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/framework/supabase/supabase-self-hosting23.jpg)

点击注册后，来到面板，会看到 user 这里新增了一条记录，是有 email 标识的

![supabase-self-hosting24](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/framework/supabase/supabase-self-hosting24.jpg)

此时再来到获取邮箱的网址，会看到下方收到了邮件提示，点击去确认，会看到我们的校验码

![supabase-self-hosting25](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/framework/supabase/supabase-self-hosting25.jpg)

![supabase-self-hosting26](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/framework/supabase/supabase-self-hosting26.jpg)

有了校验码后，我们继续来完成 apiVerifyEmail 邮箱验证部分的函数逻辑。在文档中找到这个 OTP 验证部分，复制注册一次性密码这一项代码至`vue-version/src/services/apiVerifyEmail.js`，不是 SMS 短信验证哦

![supabase-self-hosting27](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/framework/supabase/supabase-self-hosting27.jpg)

```js
import supabase from "@/utils/supabase";

export async function verifyEmail(email, token) {
  const { data, error } = await supabase.auth.verifyOtp({
    email,
    token,
    type: "email",
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
```

restart 项目后，我们在面板中删除之前的用户，按照上面流程重新注册一个账号，并使用验证码进行验证

## 检索用户

验证完成后，在 localstorage 中我们会看到这样的数据结构，是我们刚校验完成的用户数据，我们需要获取到这个数据

![supabase-self-hosting28](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/framework/supabase/supabase-self-hosting28.jpg)

在文档 https://supabase.com/docs/reference/javascript/auth-getuser 中，我们可以查到通过 `jwt` 来获取数据的方法，复制过来~

我们可以看到有一个参数 `jwt`，这个 `jwt` 其实就是我们前面 `localstorage` 里的 `access_token`，也就是说我们现在要做的是获取到这个`access_token`，所以我们修改配置文件中`VITE_SUPABASE_AUTH_KEY`的值为 `localstorage` 里的 Key

```env
# SUPABASE config
VITE_SUPABASE_URL=http://localhost:8000
VITE_SUPABASE_KEY=xxxxxxxxxxx
VITE_SUPABASE_AUTH_KEY=sb-localhost-auth-token
```

`vue-version/src/services/apiRetrieveUser.js` 代码如下

```js
import { getConfig } from "@/utils/configHelper";
import { getItem } from "@/utils/localstorageHelper";

const SUPABASE_AUTH_KEY = getConfig("SUPABASE_AUTH_KEY");

export async function retrieveUser() {
  const jwt = getItem(SUPABASE_AUTH_KEY).access_token;

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser(jwt);

  if (error) {
    throw new Error(error?.message);
  }
  return user;
}
```

## 登录

下面我们完成登录逻辑，在控制面板 API Docs 中可以获取登录代码

![supabase-self-hosting30](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/framework/supabase/supabase-self-hosting30.jpg)
