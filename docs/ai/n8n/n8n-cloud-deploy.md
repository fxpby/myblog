---
sidebar_position: 1
---

# n8n 云端部署（无需信用卡）

## 1. 🤲 huggingface 注册

来到 https://huggingface.co/ 官网注册个账号~

注册完点击上方工具栏的 Spaces

![n8n-1](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/framework/supabase/n8n-1.jpg)

搜索 n8n tomo，这里是别人封好的，点击封面进去

![n8n-2](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/framework/supabase/n8n-2.jpg)

再点击右上角 Duplicate this Space 复制

![n8n-3](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/framework/supabase/n8n-3.jpg)

## 2. ⚡️ supabase 注册

来到 https://supabase.com/ 注册一个账号，同时创建一个组织，并创建一个 project，选择区域的时候建议选择距离自己较近的地方

创建完项目后进入到项目页面，点击上方的 connect

![n8n-4](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/framework/supabase/n8n-4.jpg)

其中 Type 选择 SQLAlchemy

![n8n-5](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/framework/supabase/n8n-5.jpg)

Transaction pooler 事务池这里有一个.env 文件，请将页面窗口保留至此

![n8n-6](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/framework/supabase/n8n-6.jpg)

## 3. 🛠 n8n 配置

回到 huggingface 页面窗口，选择 CPU basic 选项，这个是免费的，但是不花钱嘛不能贪求什么，人家不会给我们保存数据，所以我们就需要把数据存到云端数据库中，这也就是上面用 supabase 的原因了。

- DB_POSTGRESDB_PASSWORD 填写之前 supabase 创建项目的密码
- N8N_ENCRYPTION_KEY 随便写
- DB_POSTGRESDB_USER 填写之前 supabase .env user 的值
- DB_POSTGRESDB_HOST 填写之前 supabase .env host 的值

:::tip

注意复制 .env 文件内容不要末尾带空格，需检查好哦

:::

![n8n-7](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/framework/supabase/n8n-7.jpg)

下方 WEBHOOK_URL 替换成自己的，时区国内可以写上海，version 是版本，如有特殊需要可以去 GitHub 找到自己所需的，stable 即最新稳定版

![n8n-8](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/framework/supabase/n8n-8.jpg)

最后 Visibility 改成 public，再点击左下角的 Duplicate Space 完成复制操作

![n8n-9](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/framework/supabase/n8n-9.jpg)

耐心等待一会儿，看到如图所示运行结果即可访问地址

![n8n-10](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/framework/supabase/n8n-10.jpg)

访问地址后先进行一波注册操作~

![n8n-10](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/framework/supabase/n8n-11.jpg)

## 4. 🏎 n8n 初体验

注册好后我们来试一下，点击 start from scratch 进入设计页面

![n8n-12](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/framework/supabase/n8n-12.jpg)

点击 add first step 添加 trigger manually

![n8n-15](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/framework/supabase/n8n-15.jpg)

再点击加号节点，添加一个 AI，这里随意，搜自己有的就行

![n8n-16](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/framework/supabase/n8n-16.jpg)

这边用 openrouter 示例

![n8n-17](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/framework/supabase/n8n-17.jpg)

![n8n-18](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/framework/supabase/n8n-18.jpg)

配置好 API Key 后，选择对应模型，选个免费滴~ 然后点击生成前序节点

![n8n-19](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/framework/supabase/n8n-19.jpg)

点击第二个 chat 节点后，在下方 chat 聊天框内输入问题，发送后即可看到流程开始执行流转

![n8n-13](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/framework/supabase/n8n-13.jpg)

如图工作流执行完成

![n8n-14](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/framework/supabase/n8n-14.jpg)

## 5. 🚑 云服务器保活

服务器是免费的，长时间没人使用会停机，我们肯定是希望它能一直跑着的，就需要保活处理一下

我们新建一个工作流

![n8n-20](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/framework/supabase/n8n-20.jpg)

添加一个定时任务步骤

![n8n-21](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/framework/supabase/n8n-21.jpg)

触发规则选择小时，即一小时执行一次

![n8n-22](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/framework/supabase/n8n-22.jpg)

后续节点添加 http request

![n8n-23](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/framework/supabase/n8n-23.jpg)

如图输入当前服务器地址，即每小时访问一次这个服务器地址

![n8n-24](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/framework/supabase/n8n-24.jpg)

再点击上方的 Inactive 让工作流上线

![n8n-25](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/framework/supabase/n8n-25.jpg)

上线成功提示，至此云端免费的 n8n 服务就部署好了！🥳

![n8n-26](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/framework/supabase/n8n-26.jpg)
