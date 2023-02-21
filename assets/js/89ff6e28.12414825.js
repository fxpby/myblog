"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3876],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4253:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const a={},o="tsconfig.json",l={unversionedId:"typescript/tsconfig",id:"typescript/tsconfig",title:"tsconfig.json",description:"\u521b\u5efa",source:"@site/docs/typescript/tsconfig.md",sourceDirName:"typescript",slug:"/typescript/tsconfig",permalink:"/myblog/docs/typescript/tsconfig",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/typescript/tsconfig.md",tags:[],version:"current",frontMatter:{},sidebar:"typescript",previous:{title:"\u5143\u7ec4",permalink:"/myblog/docs/typescript/advance/ts-tuple"},next:{title:"typeof \u7c7b\u578b\u5b88\u536b",permalink:"/myblog/docs/typescript/typeof-guard"}},s={},c=[{value:"\u521b\u5efa",id:"\u521b\u5efa",level:2},{value:"\u7f16\u8bd1\u9009\u9879",id:"\u7f16\u8bd1\u9009\u9879",level:2},{value:"\u5e38\u7528\u914d\u7f6e",id:"\u5e38\u7528\u914d\u7f6e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"tsconfigjson"},"tsconfig.json"),(0,i.kt)("h2",{id:"\u521b\u5efa"},"\u521b\u5efa"),(0,i.kt)("p",null,"\u5728\u9879\u76ee\u6839\u76ee\u5f55\u521b\u5efa\u4e00\u4e2a\u7a7a\u7684 JSON \u6587\u4ef6"),(0,i.kt)("h2",{id:"\u7f16\u8bd1\u9009\u9879"},"\u7f16\u8bd1\u9009\u9879"),(0,i.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"compilerOptions")," \u6765\u914d\u7f6e\u7f16\u8bd1\u9009\u9879"),(0,i.kt)("p",null,"\u6bd4\u5982\u8c03\u6574 ",(0,i.kt)("inlineCode",{parentName:"p"},"--target"),", \u5c31\u53ef\u4ee5\u8fdb\u884c\u964d\u7ea7\u7f16\u8bd1"),(0,i.kt)("p",null,"\u6bd4\u5982\u914d\u7f6e\u4e0b\u9762\u9009\u9879\u8fdb\u5165",(0,i.kt)("inlineCode",{parentName:"p"},"\u4e25\u683c\u6a21\u5f0f")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--strict"),": \u542f\u7528\u6240\u6709\u4e25\u683c\u7c7b\u578b\u68c0\u67e5\u9009\u9879\u3002\n\u542f\u7528 --strict\u76f8\u5f53\u4e8e\u542f\u7528 --noImplicitAny, --noImplicitThis, --alwaysStrict\uff0c --strictNullChecks\u548c --strictFunctionTypes\u548c--strictPropertyInitialization"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--noImplicitAny"),": \u5728\u8868\u8fbe\u5f0f\u548c\u58f0\u660e\u4e0a\u6709\u9690\u542b\u7684 any"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--strictNullChecks"),": \u5728\u4e25\u683c\u7684 null\u68c0\u67e5\u6a21\u5f0f\u4e0b\uff0c null\u548c undefined\u503c\u4e0d\u5305\u542b\u5728\u4efb\u4f55\u7c7b\u578b\u91cc\uff0c\u53ea\u5141\u8bb8\u7528\u5b83\u4eec\u81ea\u5df1\u548c any\u6765\u8d4b\u503c\uff08\u6709\u4e2a\u4f8b\u5916\uff0c undefined\u53ef\u4ee5\u8d4b\u503c\u5230 void\uff09"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--noImplicitThis"),": \u5f53 this\u8868\u8fbe\u5f0f\u7684\u503c\u4e3a any\u7c7b\u578b\u7684\u65f6\u5019\uff0c\u751f\u6210\u4e00\u4e2a\u9519\u8bef"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--strictFunctionTypes"),": \u7981\u7528\u51fd\u6570\u53c2\u6570\u53cc\u5411\u534f\u53d8\u68c0\u67e5"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"strictPropertyInitialization"),": \u786e\u4fdd\u7c7b\u7684\u975eundefined\u5c5e\u6027\u5df2\u7ecf\u5728\u6784\u9020\u51fd\u6570\u91cc\u521d\u59cb\u5316\u3002\u82e5\u8981\u4ee4\u6b64\u9009\u9879\u751f\u6548\uff0c\u9700\u8981\u540c\u65f6\u542f\u7528--strictNullChecks"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"alwaysStrict"),': \u4ee5\u4e25\u683c\u6a21\u5f0f\u89e3\u6790\u5e76\u4e3a\u6bcf\u4e2a\u6e90\u6587\u4ef6\u751f\u6210 "use strict"\u8bed\u53e5')),(0,i.kt)("h2",{id:"\u5e38\u7528\u914d\u7f6e"},"\u5e38\u7528\u914d\u7f6e"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"include\uff1a\u6307\u5b9a\u7f16\u8bd1\u6587\u4ef6\u9ed8\u8ba4\u662f\u7f16\u8bd1\u5f53\u524d\u76ee\u5f55\u4e0b\u6240\u6709\u7684 ts \u6587\u4ef6")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"include": [\n  "src/**/*"\n]\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"exclude: \u6307\u5b9a\u6392\u9664\u7684\u6587\u4ef6(include \u53cd\u5411\u64cd\u4f5c)"),(0,i.kt)("li",{parentName:"ul"},"target: \u6307\u5b9a\u7f16\u8bd1 js \u7684\u7248\u672c"),(0,i.kt)("li",{parentName:"ul"},"allowJS\uff1a\u662f\u5426\u5141\u8bb8\u7f16\u8bd1 js \u6587\u4ef6"),(0,i.kt)("li",{parentName:"ul"},"removeComments: \u662f\u5426\u5728\u7f16\u8bd1\u8fc7\u7a0b\u4e2d\u5220\u9664\u6587\u4ef6\u4e2d\u7684\u6ce8\u91ca"),(0,i.kt)("li",{parentName:"ul"},"rootDir: \u7f16\u8bd1\u6587\u4ef6\u7684\u76ee\u5f55"),(0,i.kt)("li",{parentName:"ul"},"outDir: \u8f93\u51fa\u6587\u4ef6\u7684\u76ee\u5f55"),(0,i.kt)("li",{parentName:"ul"},"sourceMap\uff1a\u4ee3\u7801\u6e90\u6587\u4ef6"),(0,i.kt)("li",{parentName:"ul"},"strict: \u4e25\u683c\u6a21\u5f0f"),(0,i.kt)("li",{parentName:"ul"},"module\uff1a\u6a21\u5757\u5316\u65b9\u5f0f")),(0,i.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "compilerOptions": {\n    /* Visit https://aka.ms/tsconfig.json to read more about this file */\n\n    /* Projects */\n    // "incremental": true,                              /* Enable incremental compilation */\n    // "composite": true,                                /* Enable constraints that allow a TypeScript project to be used with project references. */\n    // "tsBuildInfoFile": "./",                          /* Specify the folder for .tsbuildinfo incremental compilation files. */\n    // "disableSourceOfProjectReferenceRedirect": true,  /* Disable preferring source files instead of declaration files when referencing composite projects */\n    // "disableSolutionSearching": true,                 /* Opt a project out of multi-project reference checking when editing. */\n    // "disableReferencedProjectLoad": true,             /* Reduce the number of projects loaded automatically by TypeScript. */\n\n    /* Language and Environment */\n    "target": "es6",                                  /* \u6307\u5b9a ECMAScript \u76ee\u6807\u7248\u672c Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */\n    // "lib": [],                                        /* \u6307\u5b9a\u8981\u5305\u542b\u5728\u7f16\u8bd1\u4e2d\u7684\u5e93\u6587\u4ef6 Specify a set of bundled library declaration files that describe the target runtime environment. */\n    // "jsx": "preserve",                                /* \u6307\u5b9a jsx \u4ee3\u7801\u7684\u751f\u6210\uff1a\'preserve\', \'react-native\', \'react\' Specify what JSX code is generated. */\n    // "experimentalDecorators": true,                   /* \u542f\u7528\u88c5\u9970\u5668 Enable experimental support for TC39 stage 2 draft decorators. */\n    // "emitDecoratorMetadata": true,                    /* \u4e3a\u88c5\u9970\u5668\u63d0\u4f9b\u5143\u6570\u636e\u7684\u652f\u6301Emit design-type metadata for decorated declarations in source files. */\n    // "jsxFactory": "",                                 /* Specify the JSX factory function used when targeting React JSX emit, e.g. \'React.createElement\' or \'h\' */\n    // "jsxFragmentFactory": "",                         /* Specify the JSX Fragment reference used for fragments when targeting React JSX emit e.g. \'React.Fragment\' or \'Fragment\'. */\n    // "jsxImportSource": "",                            /* Specify module specifier used to import the JSX factory functions when using `jsx: react-jsx*`.` */\n    // "reactNamespace": "",                             /* Specify the object invoked for `createElement`. This only applies when targeting `react` JSX emit. */\n    // "noLib": true,                                    /* Disable including any library files, including the default lib.d.ts. */\n    // "useDefineForClassFields": true,                  /* Emit ECMAScript-standard-compliant class fields. */\n\n    /* Modules */\n    "module": "commonjs",                                /* \u6307\u5b9a\u4f7f\u7528\u6a21\u5757 \'commonjs\', \'amd\', \'system\',Specify what module code is generated. */\n    // "rootDir": "./",                                  /* Specify the root folder within your source files. */\n    // "moduleResolution": "node",                       /* \u9009\u62e9\u6a21\u5757\u89e3\u6790\u7b56\u7565\uff1a \'node\' (Node.js) or \'classic\' (TypeScript pre-1.6) Specify how TypeScript looks up a file from a given module specifier. */\n    // "baseUrl": "./",                                  /* \u7528\u4e8e\u89e3\u6790\u975e\u76f8\u5bf9\u6a21\u5757\u540d\u79f0\u7684\u57fa\u76ee\u5f55 Specify the base directory to resolve non-relative module names. */\n    // "paths": {},                                      /* \u6a21\u5757\u540d\u5230\u57fa\u4e8e baseUrl \u7684\u8def\u5f84\u6620\u5c04\u7684\u5217\u8868 Specify a set of entries that re-map imports to additional lookup locations. */\n    // "rootDirs": [],                                   /* \u6839\u6587\u4ef6\u5939\u5217\u8868\uff0c\u5176\u7ec4\u5408\u5185\u5bb9\u8868\u793a\u9879\u76ee\u8fd0\u884c\u65f6\u7684\u7ed3\u6784\u5185\u5bb9 Allow multiple folders to be treated as one when resolving modules. */\n    // "typeRoots": [],                                  /* \u5305\u542b\u7c7b\u578b\u58f0\u660e\u7684\u6587\u4ef6\u5217\u8868 Specify multiple folders that act like `./node_modules/@types`. */\n    // "types": [],                                      /* \u9700\u8981\u5305\u542b\u7684\u7c7b\u578b\u58f0\u660e\u6587\u4ef6\u540d\u5217\u8868 Specify type package names to be included without being referenced in a source file. */\n    // "allowUmdGlobalAccess": true,                     /* Allow accessing UMD globals from modules. */\n    // "resolveJsonModule": true,                        /* Enable importing .json files */\n    // "noResolve": true,                                /* Disallow `import`s, `require`s or `<reference>`s from expanding the number of files TypeScript should add to a project. */\n\n    /* JavaScript Support */\n    "allowJs": true,                                     /* \u5141\u8bb8\u7f16\u8bd1 JavaScript \u6587\u4ef6 Allow JavaScript files to be a part of your program. Use the `checkJS` option to get errors from these files. */\n    "checkJs": true,                                     /* \u62a5\u544a JavaScript \u6587\u4ef6\u4e2d\u7684\u9519\u8bef Enable error reporting in type-checked JavaScript files. */\n    // "maxNodeModuleJsDepth": 1,                        /* Specify the maximum folder depth used for checking JavaScript files from `node_modules`. Only applicable with `allowJs`. */\n\n    /* Emit */\n    // "declaration": true,                              /* \u751f\u6210\u76f8\u5e94\u7684 \'.d.ts\' \u6587\u4ef6 Generate .d.ts files from TypeScript and JavaScript files in your project. */\n    // "declarationMap": true,                           /* Create sourcemaps for d.ts files. */\n    // "emitDeclarationOnly": true,                      /* Only output d.ts files and not JavaScript files. */\n    // "sourceMap": true,                                /* \u751f\u6210\u76f8\u5e94\u7684 \'.map\' \u6587\u4ef6 Create source map files for emitted JavaScript files. */\n    // "outFile": "./",                                  /* \u5c06\u8f93\u51fa\u6587\u4ef6\u5408\u5e76\u4e3a\u4e00\u4e2a\u6587\u4ef6 Specify a file that bundles all outputs into one JavaScript file. If `declaration` is true, also designates a file that bundles all .d.ts output. */\n    // "outDir": "./",                                   /* \u6307\u5b9a\u8f93\u51fa\u76ee\u5f55 Specify an output folder for all emitted files. */\n    // "removeComments": true,                           /* \u5220\u9664\u7f16\u8bd1\u540e\u7684\u6240\u6709\u7684\u6ce8\u91ca Disable emitting comments. */\n    // "noEmit": true,                                   /* \u4e0d\u751f\u6210\u8f93\u51fa\u6587\u4ef6 Disable emitting files from a compilation. */\n    // "importHelpers": true,                            /* \u4ece tslib \u5bfc\u5165\u8f85\u52a9\u5de5\u5177\u51fd\u6570Allow importing helper functions from tslib once per project, instead of including them per-file. */\n    // "importsNotUsedAsValues": "remove",               /* Specify emit/checking behavior for imports that are only used for types */\n    // "downlevelIteration": true,                       /* Emit more compliant, but verbose and less performant JavaScript for iteration. */\n    // "sourceRoot": "",                                 /* \u6307\u5b9a\u8c03\u8bd5\u5668\u5e94\u8be5\u627e\u5230 TypeScript \u6587\u4ef6\u800c\u4e0d\u662f\u6e90\u6587\u4ef6\u7684\u4f4d\u7f6e Specify the root path for debuggers to find the reference source code. */\n    // "mapRoot": "",                                    /* \u6307\u5b9a\u8c03\u8bd5\u5668\u5e94\u8be5\u627e\u5230\u6620\u5c04\u6587\u4ef6\u800c\u4e0d\u662f\u751f\u6210\u6587\u4ef6\u7684\u4f4d Specify the location where debugger should locate map files instead of generated locations. */\n    // "inlineSourceMap": true,                          /* \u751f\u6210\u5355\u4e2a soucemaps \u6587\u4ef6\uff0c\u800c\u4e0d\u662f\u5c06 sourcemaps \u751f\u6210\u4e0d\u540c\u7684\u6587\u4ef6 Include sourcemap files inside the emitted JavaScript. */\n    // "inlineSources": true,                            /* \u5c06\u4ee3\u7801\u4e0e sourcemaps \u751f\u6210\u5230\u4e00\u4e2a\u6587\u4ef6\u4e2d\uff0c\u8981\u6c42\u540c\u65f6\u8bbe\u7f6e\u4e86 --inlineSourceMap \u6216 --sourceMap \u5c5e\u6027 Include source code in the sourcemaps inside the emitted JavaScript. */\n    // "emitBOM": true,                                  /* Emit a UTF-8 Byte Order Mark (BOM) in the beginning of output files. */\n    // "newLine": "crlf",                                /* Set the newline character for emitting files. */\n    // "stripInternal": true,                            /* Disable emitting declarations that have `@internal` in their JSDoc comments. */\n    // "noEmitHelpers": true,                            /* Disable generating custom helper functions like `__extends` in compiled output. */\n    // "noEmitOnError": true,                            /* Disable emitting files if any type checking errors are reported. */\n    // "preserveConstEnums": true,                       /* Disable erasing `const enum` declarations in generated code. */\n    // "declarationDir": "./",                           /* Specify the output directory for generated declaration files. */\n    // "preserveValueImports": true,                     /* Preserve unused imported values in the JavaScript output that would otherwise be removed. */\n\n    /* Interop Constraints */\n    // "isolatedModules": true,                          /* \u5c06\u6bcf\u4e2a\u6587\u4ef6\u4f5c\u4e3a\u5355\u72ec\u7684\u6a21\u5757\uff0c\uff08\u4e0e \'ts.transpileModule\' \u7c7b\u4f3c\uff09Ensure that each file can be safely transpiled without relying on other imports. */\n    // "allowSyntheticDefaultImports": true,             /* \u5141\u8bb8\u4ece\u6ca1\u6709\u8bbe\u7f6e\u9ed8\u8ba4\u5bfc\u51fa\u7684\u6a21\u5757\u4e2d\u9ed8\u8ba4\u5bfc\u5165 Allow \'import x from y\' when a module doesn\'t have a default export. */\n    "esModuleInterop": true,                             /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables `allowSyntheticDefaultImports` for type compatibility. */\n    // "preserveSymlinks": true,                         /* Disable resolving symlinks to their realpath. This correlates to the same flag in node. */\n    "forceConsistentCasingInFileNames": true,            /* Ensure that casing is correct in imports. */\n\n    /* Type Checking */\n    "strict": true,                                      /* \u542f\u7528\u6240\u6709\u4e25\u683c\u7c7b\u578b\u68c0\u6d4b\u9009\u9879 Enable all strict type-checking options. */\n    // "noImplicitAny": true,                            /* \u5728\u8868\u8fbe\u5f0f\u548c\u58f0\u660e\u4e0a\u6709\u9690\u542b\u7684 any \u7c7b\u578b\u65f6\u62a5\u9519 Enable error reporting for expressions and declarations with an implied `any` type.. */\n    // "strictNullChecks": true,                         /* \u542f\u7528\u4e25\u683c\u7684 null \u68c0\u67e5When type checking, take into account `null` and `undefined`. */\n    // "strictFunctionTypes": true,                      /* When assigning functions, check to ensure parameters and the return values are subtype-compatible. */\n    // "strictBindCallApply": true,                      /* Check that the arguments for `bind`, `call`, and `apply` methods match the original function. */\n    // "strictPropertyInitialization": true,             /* Check for class properties that are declared but not set in the constructor. */\n    // "noImplicitThis": true,                           /* \u5f53 this \u8868\u8fbe\u5f0f\u503c\u4e3a any \u7c7b\u578b\u7684\u65f6\u5019\uff0c\u751f\u6210\u4e00\u4e2a\u9519\u8bef Enable error reporting when `this` is given the type `any`. */\n    // "useUnknownInCatchVariables": true,               /* Type catch clause variables as \'unknown\' instead of \'any\'. */\n    // "alwaysStrict": true,                             /* \u4ee5\u4e25\u683c\u6a21\u5f0f\u68c0\u67e5\u6bcf\u4e2a\u6a21\u5757\uff0c\u5e76\u5728\u6bcf\u4e2a\u6587\u4ef6\u91cc\u52a0\u5165 \'use strict\' Ensure \'use strict\' is always emitted. */\n    // "noUnusedLocals": true,                           /* \u6709\u672a\u4f7f\u7528\u7684\u53d8\u91cf\u65f6\uff0c\u629b\u51fa\u9519\u8bef Enable error reporting when a local variables aren\'t read. */\n    // "noUnusedParameters": true,                       /* \u6709\u672a\u4f7f\u7528\u7684\u53c2\u6570\u65f6\uff0c\u629b\u51fa\u9519\u8bef Raise an error when a function parameter isn\'t read */\n    // "exactOptionalPropertyTypes": true,               /* Interpret optional property types as written, rather than adding \'undefined\'. */\n    // "noImplicitReturns": true,                        /* \u5e76\u4e0d\u662f\u6240\u6709\u51fd\u6570\u4e2d\u4ee3\u7801\u90fd\u6709\u8fd4\u56de\u503c\u65f6\uff0c\u629b\u51fa\u9519\u8bef Enable error reporting for codepaths that do not explicitly return in a function. */\n    // "noFallthroughCasesInSwitch": true,               /* \u62a5\u544a Switch \u8bed\u53e5\u7684 fallthrough \u9519\u8bef\uff0c\u5373\u4e0d\u5141\u8bb8 switch \u7684 case \u8bed\u53e5\u8d2f\u7a7f Enable error reporting for fallthrough cases in switch statements. */\n    // "noUncheckedIndexedAccess": true,                 /* Include \'undefined\' in index signature results */\n    // "noImplicitOverride": true,                       /* Ensure overriding members in derived classes are marked with an override modifier. */\n    // "noPropertyAccessFromIndexSignature": true,       /* Enforces using indexed accessors for keys declared using an indexed type */\n    // "allowUnusedLabels": true,                        /* Disable error reporting for unused labels. */\n    // "allowUnreachableCode": true,                     /* Disable error reporting for unreachable code. */\n\n    /* Completeness */\n    // "skipDefaultLibCheck": true,                      /* Skip type checking .d.ts files that are included with TypeScript. */\n    // "skipLibCheck": true                                 /* Skip type checking all .d.ts files. */\n  }\n}\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u66f4\u591a\u8be6\u60c5\u89c1\u5b98\u7f51 ",(0,i.kt)("a",{parentName:"p",href:"https://www.tslang.cn/docs/handbook/compiler-options.html"},"https://www.tslang.cn/docs/handbook/compiler-options.html"))))}u.isMDXComponent=!0}}]);