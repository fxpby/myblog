---
sidebar_position: 6
---

# supabase 旅程临时终点 - 文件存储&修改操作

上一个目的地修改数据中，我们修改了用户 name 和 country，还有一个头像没有处理。头像是一个图片，图片就涉及到文件存储

首先来到我们控制面板的 storage 页面，左上角有一个 `New bucket`按钮，`bucket`是分区的概念。我们需要将文件存储到分区中，现在没有地方存，我们新建一个，起名为 `avatar` 并设置为 `public`，点击 `save` 保存

![supabase-self-hosting50](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/framework/supabase/supabase-self-hosting50.jpg)
