---
sidebar_position: 6
---

# supabase 旅程临时终点 - 文件存储&修改操作

## 分区创建&权限设置

上一个目的地查询数据中，我们查询回显了用户 name，country，还有一个头像，修改功能需要修改这项字段。其中头像是一个图片，图片就涉及到文件存储

首先来到我们控制面板的 storage 页面，左上角有一个 `New bucket`按钮，`bucket`是分区的概念。我们需要将文件存储到分区中，现在没有地方存，我们新建一个，起名为 `avatar` 并设置为 `public`，点击 `save` 保存

![supabase-self-hosting50](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/framework/supabase/supabase-self-hosting50.jpg)

创建分区后，我们来给这个分区新建权限，我们需要设置上传权限

![supabase-self-hosting51](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/framework/supabase/supabase-self-hosting51.jpg)

选择下面这个自定义权限

![supabase-self-hosting52](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/framework/supabase/supabase-self-hosting52.jpg)

给权限起个名字，再勾选 `INSERT` 复选框，最后选择下拉框 `authenticated`，即登录认证后才可以上传，点击 `Review`

![supabase-self-hosting53](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/framework/supabase/supabase-self-hosting53.jpg)

再点击保存按钮

![supabase-self-hosting54](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/framework/supabase/supabase-self-hosting54.jpg)

回到面板中可见我们已经设置好这条插入规则了，只针对授权的登录用户

![supabase-self-hosting55](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/framework/supabase/supabase-self-hosting55.jpg)

## 文件上传实现

在官网文档中 https://supabase.com/docs/reference/javascript/storage-from-upload 可以看到`Upload a file`描述

![supabase-self-hosting56](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/framework/supabase/supabase-self-hosting56.jpg)

我们复制代码到项目`vue-version/src/services/apiAvatar.js`中，修改如下，其中最终返回的 `data` 就是我们的文件地址

```js
import supabase from "@/utils/supabase";

export async function uploadAvatar(filename, avatarFile) {
  const { data, error } = await supabase.storage
    .from("avatars")
    .upload(filename, avatarFile);

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
```
