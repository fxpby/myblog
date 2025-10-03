---
sidebar_position: 5
---

# supabase 旅程目的地 - 新增&删除&查询操作

## 新增数据

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

## 删除数据

新增实现完了我们来实现一下删除功能，来到我们的`vue-version/src/services/apiEmployee.js`中，有一个`deleteEmployee`函数，我们来实现它

先来到项目的控制面板 API Docs 中，我们看到了 `delete row` 方法，复制下来

![supabase-self-hosting44](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/framework/supabase/supabase-self-hosting44.jpg)

再修改如下，通过参数 id 去删除，也不需要返回值，只需要抛出异常

```js
export async function deleteEmployee(id) {
  const { error } = await supabase.from("employee").delete().eq("id", id);

  if (error) {
    throw new Error(error.message);
  }
}
```

删除前我们的所有 user 数据是这样的

![supabase-self-hosting45](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/framework/supabase/supabase-self-hosting45.jpg)

再来到项目删除第二项试一下

![supabase-self-hosting46](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/framework/supabase/supabase-self-hosting46.jpg)

删除后 user 数据确实去除了第二项，删除成功~

![supabase-self-hosting47](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/framework/supabase/supabase-self-hosting47.jpg)

## 查询数据

操作一栏还有一项编辑，点击编辑按钮后跳转到一个可以修改信息的页面，这个页面需要先获取 user 数据，所以需要先实现查询功能

来到我们的`vue-version/src/services/apiEmployee.js`中，有一个`getEmployee`函数，我们来实现一下

先来到项目的控制面板 API Docs 中，我们看到了 `Filtering` 方法

![supabase-self-hosting48](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/framework/supabase/supabase-self-hosting48.jpg)

我们需要根据 id 去查询，复制下来相关代码再修改如下，其中 `employee` 是数组，我们取第一项，故返回`employee[0]`

```js
export async function getEmployee(id) {
  let { data: employee, error } = await supabase
    .from("employee")
    .select("*")
    .eq("id", id);

  if (error) {
    throw new Error(error.message);
  }

  return employee[0];
}
```

写好函数后我们来到列表点击第一项的编辑按钮，可以看到跳转到了编辑页面且成功回显了该用户的数据信息~

![supabase-self-hosting49](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/framework/supabase/supabase-self-hosting49.jpg)
