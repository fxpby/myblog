#!/bin/bash

# 同步 /blog 目录到 /src/content/blog
# 并将 @site 别名替换为相对路径
# 移除不存在的 info-* 组件导入
# 为组件导入添加文件扩展名
# 为 React 组件添加 client:load 指令

BLOG_DIR="/Users/fxpby/code/my-code/web/myblog/blog"
CONTENT_BLOG_DIR="/Users/fxpby/code/my-code/web/myblog/src/content/blog"

echo "开始同步博客文件..."

for file in "$BLOG_DIR"/*.mdx; do
  filename=$(basename "$file")

  # 跳过 authors.yml
  if [ "$filename" = "authors.yml" ]; then
    continue
  fi

  echo "处理: $filename"

  # 复制文件
  cp "$file" "$CONTENT_BLOG_DIR/$filename"

  # 替换 @site 别名为相对路径 (src/content/blog -> src/components 需要 ../../)
  sed -i '' 's|@site/src/components|../../components|g' "$CONTENT_BLOG_DIR/$filename"

  # 移除 info-* 组件的导入和使用
  sed -i '' '/import.*PostBlogs\/info-/d' "$CONTENT_BLOG_DIR/$filename"
  sed -i '' '/<MyComponent.*\/>/d' "$CONTENT_BLOG_DIR/$filename"

  # 为 DrawGift 等组件添加 /index.jsx 扩展名
  sed -i '' "s|from '../../components/DrawGift';|from '../../components/DrawGift/index.jsx';|g" "$CONTENT_BLOG_DIR/$filename"

  # 为 React 组件添加 client:load 指令
  sed -i '' 's|<DrawGift/>|<DrawGift client:load />|g' "$CONTENT_BLOG_DIR/$filename"
  sed -i '' 's|<DrawGift />|<DrawGift client:load />|g' "$CONTENT_BLOG_DIR/$filename"

done

echo "同步完成！"
