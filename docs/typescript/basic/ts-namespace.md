---
id: ts-namespace
title: 命名空间
tags:
  - TypeScript
---

## 模块

- 内部模块用于组织代码，避免命名冲突
- 任何包含顶级 import 或者 export 的文件都被当场一个模块，否则内容被视为全局可见

## 命名空间

- 通过 namespace 关键字定义
- 命名空间内的类默认私有

```ts
namespace A {
  export const a = 1
}
```

### 命名空间嵌套

```ts
namespace A {
  export namespace C {
    export const D = 2
  }
}
```

### 命名空间抽离

```ts
export namespace B {
  export const a = 3
}
```

```ts
import { B } from './index2'
namespace A {
  export namespace C {
    export const D = 2
  }
}
console.log(A.C.D, B)
```

### 命名空间简化

```ts
namespace A {
  export namespace C {
    export const D = 2
  }
}
import T = A.C
console.log(T.D)
```

### 重名命名空间合并

```ts
namespace A {
  export const a = 1
}
namespace A {
  export const b = 2
}
```

相当于

```ts
namespace A {
  export const a = 1
  export const b = 2
}
```
