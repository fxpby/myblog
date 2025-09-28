---
sidebar_position: 2
---

# supabase 旅程启航 - table 表设计

前面我们自部署了相关服务，进入了管理面板，我们用 supabase 的很重要一点就是用它来 CURD~

CURD 之前，我们还莫得表结构，需要设计一下~

本次的 web 应用是一个人员管理系统，列表有`姓名`,`年龄`,`爱好`,`所在地`,`电话`,`操作（编辑、删除）`几项，针对这些功能我们来具体分析具体设计

首先来到 `Table Editor` 点击`Create a table`创建一张表

![supabase-self-hosting8](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/framework/supabase/supabase-self-hosting8.jpg)

上方 `name`中写入我们的表名称，这里写的是`person`

下方就是列的配置，`add column`来增加列，如图所示，配好后点击 `save` 保存

![supabase-self-hosting9](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/framework/supabase/supabase-self-hosting9.jpg)

接着做啥捏，插入数据么，不不，先等等，我们先去配置权限，即行级别安全，点击`Add RLS policy`跳转到对应编辑页面
![supabase-self-hosting10](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/framework/supabase/supabase-self-hosting10.jpg)

再点击 `create policy`创建权限

![supabase-self-hosting11](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/framework/supabase/supabase-self-hosting11.jpg)

需要输入规则名称，随便写，然后权限给 ALL 就是所有，最后 save 保存~我们的表就创建完成啦！👏

![supabase-self-hosting12](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/framework/supabase/supabase-self-hosting12.jpg)
