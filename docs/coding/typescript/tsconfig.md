# tsconfig.json

## 创建

在项目根目录创建一个空的 JSON 文件

## 编译选项

可以通过 `compilerOptions` 来配置编译选项

比如调整 `--target`, 就可以进行降级编译

比如配置下面选项进入`严格模式`

- `--strict`: 启用所有严格类型检查选项。
  启用 --strict 相当于启用 --noImplicitAny, --noImplicitThis, --alwaysStrict， --strictNullChecks 和 --strictFunctionTypes 和--strictPropertyInitialization
- `--noImplicitAny`: 在表达式和声明上有隐含的 any
- `--strictNullChecks`: 在严格的 null 检查模式下， null 和 undefined 值不包含在任何类型里，只允许用它们自己和 any 来赋值（有个例外， undefined 可以赋值到 void）
- `--noImplicitThis`: 当 this 表达式的值为 any 类型的时候，生成一个错误
- `--strictFunctionTypes`: 禁用函数参数双向协变检查
- `strictPropertyInitialization`: 确保类的非 undefined 属性已经在构造函数里初始化。若要令此选项生效，需要同时启用--strictNullChecks
- `alwaysStrict`: 以严格模式解析并为每个源文件生成 "use strict"语句

## 常用配置

- include：指定编译文件默认是编译当前目录下所有的 ts 文件

```json
"include": [
  "src/**/*"
]
```

- exclude: 指定排除的文件(include 反向操作)
- target: 指定编译 js 的版本
- allowJS：是否允许编译 js 文件
- removeComments: 是否在编译过程中删除文件中的注释
- rootDir: 编译文件的目录
- outDir: 输出文件的目录
- sourceMap：代码源文件
- strict: 严格模式
- module：模块化方式

## 示例

```json
{
  "compilerOptions": {
    /* Visit https://aka.ms/tsconfig.json to read more about this file */

    /* Projects */
    // "incremental": true,                              /* Enable incremental compilation */
    // "composite": true,                                /* Enable constraints that allow a TypeScript project to be used with project references. */
    // "tsBuildInfoFile": "./",                          /* Specify the folder for .tsbuildinfo incremental compilation files. */
    // "disableSourceOfProjectReferenceRedirect": true,  /* Disable preferring source files instead of declaration files when referencing composite projects */
    // "disableSolutionSearching": true,                 /* Opt a project out of multi-project reference checking when editing. */
    // "disableReferencedProjectLoad": true,             /* Reduce the number of projects loaded automatically by TypeScript. */

    /* Language and Environment */
    "target": "es6" /* 指定 ECMAScript 目标版本 Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */,
    // "lib": [],                                        /* 指定要包含在编译中的库文件 Specify a set of bundled library declaration files that describe the target runtime environment. */
    // "jsx": "preserve",                                /* 指定 jsx 代码的生成：'preserve', 'react-native', 'react' Specify what JSX code is generated. */
    // "experimentalDecorators": true,                   /* 启用装饰器 Enable experimental support for TC39 stage 2 draft decorators. */
    // "emitDecoratorMetadata": true,                    /* 为装饰器提供元数据的支持Emit design-type metadata for decorated declarations in source files. */
    // "jsxFactory": "",                                 /* Specify the JSX factory function used when targeting React JSX emit, e.g. 'React.createElement' or 'h' */
    // "jsxFragmentFactory": "",                         /* Specify the JSX Fragment reference used for fragments when targeting React JSX emit e.g. 'React.Fragment' or 'Fragment'. */
    // "jsxImportSource": "",                            /* Specify module specifier used to import the JSX factory functions when using `jsx: react-jsx*`.` */
    // "reactNamespace": "",                             /* Specify the object invoked for `createElement`. This only applies when targeting `react` JSX emit. */
    // "noLib": true,                                    /* Disable including any library files, including the default lib.d.ts. */
    // "useDefineForClassFields": true,                  /* Emit ECMAScript-standard-compliant class fields. */

    /* Modules */
    "module": "commonjs" /* 指定使用模块 'commonjs', 'amd', 'system',Specify what module code is generated. */,
    // "rootDir": "./",                                  /* Specify the root folder within your source files. */
    // "moduleResolution": "node",                       /* 选择模块解析策略： 'node' (Node.js) or 'classic' (TypeScript pre-1.6) Specify how TypeScript looks up a file from a given module specifier. */
    // "baseUrl": "./",                                  /* 用于解析非相对模块名称的基目录 Specify the base directory to resolve non-relative module names. */
    // "paths": {},                                      /* 模块名到基于 baseUrl 的路径映射的列表 Specify a set of entries that re-map imports to additional lookup locations. */
    // "rootDirs": [],                                   /* 根文件夹列表，其组合内容表示项目运行时的结构内容 Allow multiple folders to be treated as one when resolving modules. */
    // "typeRoots": [],                                  /* 包含类型声明的文件列表 Specify multiple folders that act like `./node_modules/@types`. */
    // "types": [],                                      /* 需要包含的类型声明文件名列表 Specify type package names to be included without being referenced in a source file. */
    // "allowUmdGlobalAccess": true,                     /* Allow accessing UMD globals from modules. */
    // "resolveJsonModule": true,                        /* Enable importing .json files */
    // "noResolve": true,                                /* Disallow `import`s, `require`s or `<reference>`s from expanding the number of files TypeScript should add to a project. */

    /* JavaScript Support */
    "allowJs": true /* 允许编译 JavaScript 文件 Allow JavaScript files to be a part of your program. Use the `checkJS` option to get errors from these files. */,
    "checkJs": true /* 报告 JavaScript 文件中的错误 Enable error reporting in type-checked JavaScript files. */,
    // "maxNodeModuleJsDepth": 1,                        /* Specify the maximum folder depth used for checking JavaScript files from `node_modules`. Only applicable with `allowJs`. */

    /* Emit */
    // "declaration": true,                              /* 生成相应的 '.d.ts' 文件 Generate .d.ts files from TypeScript and JavaScript files in your project. */
    // "declarationMap": true,                           /* Create sourcemaps for d.ts files. */
    // "emitDeclarationOnly": true,                      /* Only output d.ts files and not JavaScript files. */
    // "sourceMap": true,                                /* 生成相应的 '.map' 文件 Create source map files for emitted JavaScript files. */
    // "outFile": "./",                                  /* 将输出文件合并为一个文件 Specify a file that bundles all outputs into one JavaScript file. If `declaration` is true, also designates a file that bundles all .d.ts output. */
    // "outDir": "./",                                   /* 指定输出目录 Specify an output folder for all emitted files. */
    // "removeComments": true,                           /* 删除编译后的所有的注释 Disable emitting comments. */
    // "noEmit": true,                                   /* 不生成输出文件 Disable emitting files from a compilation. */
    // "importHelpers": true,                            /* 从 tslib 导入辅助工具函数Allow importing helper functions from tslib once per project, instead of including them per-file. */
    // "importsNotUsedAsValues": "remove",               /* Specify emit/checking behavior for imports that are only used for types */
    // "downlevelIteration": true,                       /* Emit more compliant, but verbose and less performant JavaScript for iteration. */
    // "sourceRoot": "",                                 /* 指定调试器应该找到 TypeScript 文件而不是源文件的位置 Specify the root path for debuggers to find the reference source code. */
    // "mapRoot": "",                                    /* 指定调试器应该找到映射文件而不是生成文件的位 Specify the location where debugger should locate map files instead of generated locations. */
    // "inlineSourceMap": true,                          /* 生成单个 soucemaps 文件，而不是将 sourcemaps 生成不同的文件 Include sourcemap files inside the emitted JavaScript. */
    // "inlineSources": true,                            /* 将代码与 sourcemaps 生成到一个文件中，要求同时设置了 --inlineSourceMap 或 --sourceMap 属性 Include source code in the sourcemaps inside the emitted JavaScript. */
    // "emitBOM": true,                                  /* Emit a UTF-8 Byte Order Mark (BOM) in the beginning of output files. */
    // "newLine": "crlf",                                /* Set the newline character for emitting files. */
    // "stripInternal": true,                            /* Disable emitting declarations that have `@internal` in their JSDoc comments. */
    // "noEmitHelpers": true,                            /* Disable generating custom helper functions like `__extends` in compiled output. */
    // "noEmitOnError": true,                            /* Disable emitting files if any type checking errors are reported. */
    // "preserveConstEnums": true,                       /* Disable erasing `const enum` declarations in generated code. */
    // "declarationDir": "./",                           /* Specify the output directory for generated declaration files. */
    // "preserveValueImports": true,                     /* Preserve unused imported values in the JavaScript output that would otherwise be removed. */

    /* Interop Constraints */
    // "isolatedModules": true,                          /* 将每个文件作为单独的模块，（与 'ts.transpileModule' 类似）Ensure that each file can be safely transpiled without relying on other imports. */
    // "allowSyntheticDefaultImports": true,             /* 允许从没有设置默认导出的模块中默认导入 Allow 'import x from y' when a module doesn't have a default export. */
    "esModuleInterop": true /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables `allowSyntheticDefaultImports` for type compatibility. */,
    // "preserveSymlinks": true,                         /* Disable resolving symlinks to their realpath. This correlates to the same flag in node. */
    "forceConsistentCasingInFileNames": true /* Ensure that casing is correct in imports. */,

    /* Type Checking */
    "strict": true /* 启用所有严格类型检测选项 Enable all strict type-checking options. */
    // "noImplicitAny": true,                            /* 在表达式和声明上有隐含的 any 类型时报错 Enable error reporting for expressions and declarations with an implied `any` type.. */
    // "strictNullChecks": true,                         /* 启用严格的 null 检查When type checking, take into account `null` and `undefined`. */
    // "strictFunctionTypes": true,                      /* When assigning functions, check to ensure parameters and the return values are subtype-compatible. */
    // "strictBindCallApply": true,                      /* Check that the arguments for `bind`, `call`, and `apply` methods match the original function. */
    // "strictPropertyInitialization": true,             /* Check for class properties that are declared but not set in the constructor. */
    // "noImplicitThis": true,                           /* 当 this 表达式值为 any 类型的时候，生成一个错误 Enable error reporting when `this` is given the type `any`. */
    // "useUnknownInCatchVariables": true,               /* Type catch clause variables as 'unknown' instead of 'any'. */
    // "alwaysStrict": true,                             /* 以严格模式检查每个模块，并在每个文件里加入 'use strict' Ensure 'use strict' is always emitted. */
    // "noUnusedLocals": true,                           /* 有未使用的变量时，抛出错误 Enable error reporting when a local variables aren't read. */
    // "noUnusedParameters": true,                       /* 有未使用的参数时，抛出错误 Raise an error when a function parameter isn't read */
    // "exactOptionalPropertyTypes": true,               /* Interpret optional property types as written, rather than adding 'undefined'. */
    // "noImplicitReturns": true,                        /* 并不是所有函数中代码都有返回值时，抛出错误 Enable error reporting for codepaths that do not explicitly return in a function. */
    // "noFallthroughCasesInSwitch": true,               /* 报告 Switch 语句的 fallthrough 错误，即不允许 switch 的 case 语句贯穿 Enable error reporting for fallthrough cases in switch statements. */
    // "noUncheckedIndexedAccess": true,                 /* Include 'undefined' in index signature results */
    // "noImplicitOverride": true,                       /* Ensure overriding members in derived classes are marked with an override modifier. */
    // "noPropertyAccessFromIndexSignature": true,       /* Enforces using indexed accessors for keys declared using an indexed type */
    // "allowUnusedLabels": true,                        /* Disable error reporting for unused labels. */
    // "allowUnreachableCode": true,                     /* Disable error reporting for unreachable code. */

    /* Completeness */
    // "skipDefaultLibCheck": true,                      /* Skip type checking .d.ts files that are included with TypeScript. */
    // "skipLibCheck": true                                 /* Skip type checking all .d.ts files. */
  }
}
```

> [更多详情见官网](https://www.tslang.cn/docs/handbook/compiler-options.html)
