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
    .from("avatar")
    .upload(filename, avatarFile);

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
```

再来到控制面板 API Docs 中，找到我们更新的代码复制下来

![supabase-self-hosting57](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/framework/supabase/supabase-self-hosting57.jpg)

来到项目的`vue-version/src/services/apiEmployee.js`文件中的`updateEmployee`函数中修改如下

```js
export async function updateEmployee(id, updateObj) {
  const { data, error } = await supabase
    .from("employee")
    .update(updateObj)
    .eq("id", id)
    .select();

  if (error) {
    throw new Error(error.message);
  }

  return data[0];
}
```

这样修改操作调用 SDK 就完成了，看到这时做过上传的同学可能会有一些问号，？？？图片上传这么简单就完了？，其实调用上传图片的逻辑在项目的 hooks 中，下面我们简单看一下核心代码

在`vue-version/src/features/employee/EmployeeForm.vue`中有下面这样一段代码，即在点击修改按钮时

- 如果头像没有改变，则直接调用更新方法
- 如果头像有改变，则去调用上传头像方法，上传后获取到我们的新头像地址后更新 avatar 的值再调用更新方法

具体整个流程实现代码可去项目里浏览梳理

```js
function handleSubmit() {
  // avatar not changed
  if (!avatarObj.value) {
    updateEmployee(employeeId);
    return;
  }

  const filename = generateFilename(avatarObj.value.name);

  uploadAvatar(filename, {
    onSuccess: (avatarData) => {
      avatar.value = `${SUPABASE_URL}storage/v1/object/public/${avatarData.fullPath}`;

      updateEmployee(employeeId);
    },
  });
}
```

emmm，非常顺利地，又踩到一个坑，非代码问题，本机 MacOS 环境的这个分区无法上传文件...
