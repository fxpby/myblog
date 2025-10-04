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
      avatar.value = `${SUPABASE_URL}/storage/v1/object/public/${avatarData.fullPath}`;

      updateEmployee(employeeId);
    },
  });
}
```

emmm，非常顺利地，又踩到一个坑，非代码问题，本机 MacOS 环境的这个分区无法上传文件...

话说这坑踩得可真实在，自己系统是 `macOS Sonoma 14.5`

在 GitHub issue 中有查到两条相关问题，其中有说在 Docker 中需启用 `VirtioFS`，看了眼自己的配置是开着的

大神网友提到 Storage 的文件系统后端使用 `xattr`，这个对于 macOS 的 Docker 是不管用，可以使用 minio，即使用如下命令

```bash
docker compose -f docker-compose.yml -f docker-compose.s3.yml up -d
```

然鹅可能昨晚运气有失偏颇，这么搞完有几个容器一直起不来 🥺。转天让心爱的小本本休息几秒重启了一下，功夫不负有心人，终于成了，话说这么重要的信息为什么官网不提及 🤧

问题处理完，回顾一下上面的内容，有几个问题很好奇，想学习探索一下

1. 什么是 xattr
2. 为什么 Supabase Storage 需要 xattr
3. 为什么 xattr 在 macOS 的 Docker 中不工作
4. 为什么 MinIO(S3 兼容) 能解决问题
5. VirtioFS 解决了什么
6. VirtioFS 仍然无法解决 xattr 的原因

感觉这些应该新开个地方记录，暂时没想好放哪里，先记录在下面吧

继续回到项目，可以看到修改成功了！

![supabase-self-hosting59](https://fxpby.oss-cn-beijing.aliyuncs.com/blogImg/framework/supabase/supabase-self-hosting59.jpg)

### macOS 自部署 Storage 问题回顾

#### 1. 什么是 xattr

xattr 是 扩展文件属性 的缩写，它允许在文件系统中存储额外的元数据

- 额外的存储空间：除了文件内容、权限、时间戳等标准属性外，xattr 提供了额外的键值对存储
- 命名空间：通常有 user、system、security 等命名空间
- 跨平台：Linux、macOS 都支持，但实现细节不同

实际应用：

```bash
# 设置扩展属性
setfattr -n user.comment -v "这是一个测试文件" example.txt

# 查看扩展属性
getfattr example.txt

# 在 macOS 上使用不同的命令
xattr -w user.comment "这是一个测试文件" example.txt
```

#### 2. 为什么 Supabase Storage 需要 xattr

在 Supabase Storage 的文件系统后端中，xattr 用于存储文件的元数据，代码在这里：

https://github.com/supabase/storage/blob/23559aaabeba90dd0adaa30a548ec0c3322f793b/src/storage/backend/file.ts#L570

```ts
protected setMetadataAttr(file: string, attribute: string, value: string): Promise<void> {
  // 将元数据作为扩展属性存储
  return xattr.set(file, attribute, value)
}
```

其具体用途有：

- 存储文件的 MIME 类型
- 存储文件大小、哈希值
- 存储自定义元数据（如用户 ID、上传时间等）
- 权限和访问控制信息

#### 3. 为什么 xattr 在 macOS 的 Docker 中不工作

根本原因是文件系统不兼容

对于不同的文件系统

- macOS: APFS/HFS+ (使用不同的 xattr 实现)
- Linux: ext4/xfs/btrfs (使用标准的 xattr)
- Docker 容器: 运行在 Linux 环境中

Docker 的文件共享机制是

```bash
# 当在 macOS 上运行 Docker 时：
macOS 主机 → Docker Desktop VM (Linux) → 容器

# 文件系统挂载：
macOS 目录 → 通过 gRPC-FUSE → Linux VM → 容器
```

xattr 传输问题

- macOS 和 Linux 的 xattr 实现不兼容
- Docker 的文件共享层无法正确传递 xattr
- 某些 xattr 可能在传输过程中丢失或损坏

#### 4. 为什么 MinIO(S3 兼容) 能解决问题

```yaml
environment:
  ANON_KEY: ${ANON_KEY}
  SERVICE_KEY: ${SERVICE_ROLE_KEY}
  POSTGREST_URL: http://rest:3000
  PGRST_JWT_SECRET: ${JWT_SECRET}
  DATABASE_URL: postgres://supabase_storage_admin:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGRES_DB}
  FILE_SIZE_LIMIT: 52428800
  STORAGE_BACKEND: s3 # 使用 S3 后端而不是文件系统
  GLOBAL_S3_BUCKET: stub
  GLOBAL_S3_ENDPOINT: http://minio:9000
  GLOBAL_S3_PROTOCOL: http
  GLOBAL_S3_FORCE_PATH_STYLE: true
  AWS_ACCESS_KEY_ID: supa-storage
  AWS_SECRET_ACCESS_KEY: secret1234
  AWS_DEFAULT_REGION: stub
  FILE_STORAGE_BACKEND_PATH: /var/lib/storage
  TENANT_ID: stub
  # TODO: https://github.com/supabase/storage-api/issues/55
  REGION: stub
  ENABLE_IMAGE_TRANSFORMATION: "true"
  IMGPROXY_URL: http://imgproxy:5001
```

MinIO 的优势：

- 抽象层：MinIO 提供对象存储接口，不依赖主机文件系统
- 元数据存储：MinIO 在内部处理元数据，不需要 xattr
- 跨平台一致性：S3 协议在所有平台上行为一致

```text
有问题的文件系统后端：
应用 → 文件系统操作 → xattr (在 macOS Docker 中失败)

正常的 MinIO 后端：
应用 → HTTP API → MinIO → 内部存储 (在任何平台都正常工作)
```

如果不用 MinIO，在 macOS 上可能会遇到：

- 文件上传失败
- 元数据丢失
- 权限检查异常
- Storage 服务无法正常工作

#### 5. VirtioFS 解决了什么

- 性能提升：基于 virtio 协议，减少用户态-内核态切换
- 更好的缓存：更高效的文件系统缓存机制
- 原生体验：在 VM 中更像本地文件系统

#### 6. VirtioFS 仍然无法解决 xattr 的原因

VirtioFS 主要优化了性能，但没有解决 macOS 和 Linux 之间文件系统语义的根本差异
