---
sidebar_position: 5
---

# supabase 旅程目的地 - 新增&删除操作

## 数据新增

前面第一个目的地我们的插入数据是利用脚本初始化得到的，这次我们实现真正的用 supabase 提供的能力来新增数据

点击列表页下方蓝色加号跳转至我们的创建用户表单页面

![supabase-self-hosting40](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/framework/supabase/supabase-self-hosting40.jpg)

来到我们的`vue-version/src/services/apiEmployee.js`中，有一个`insertEmployee`函数，我们来实现它

先来到项目的控制面板 API Docs 中，我们看到了 `insert row` 方法，复制下来

![supabase-self-hosting41](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/framework/supabase/supabase-self-hosting41.jpg)

再修改如下，因为 employee 是一个对象，我们直接插入即可，也不需要返回值，只需要抛出异常

```js
export async function insertEmployee(employee) {
  const { error } = await supabase.from("employee").insert([employee]);

  if (error) {
    throw new Error(error.message);
  }
}
```

来试一下，添加成功~

![supabase-self-hosting42](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/framework/supabase/supabase-self-hosting42.jpg)

列表刷新后也看到了新数据

![supabase-self-hosting43](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/framework/supabase/supabase-self-hosting43.jpg)
