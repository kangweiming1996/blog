(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{497:function(e,a,t){"use strict";t.r(a);var s=t(1),r=Object(s.a)({},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"源码目录设计"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#源码目录设计","aria-hidden":"true"}},[e._v("#")]),e._v(" 源码目录设计")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("-- src\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("   "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("-- compiler      "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 编译相关代码")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("   "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("-- core          "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 核心代码")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("   "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("-- platforms     "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 跨平台")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("   "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("-- server        "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 服务端渲染")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("   "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("-- sfc           "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# .vue文件解析")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("   "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("-- shared        "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 工具函数/共享代码")]),e._v("\n")])])]),t("h2",{attrs:{id:"compiler"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#compiler","aria-hidden":"true"}},[e._v("#")]),e._v(" Compiler")]),e._v(" "),t("p",[t("code",[e._v("compiler")]),e._v("目录包含了"),t("code",[e._v("Vue.js")]),e._v("编译相关的代码，它包括：模板编译成AST抽象语法树、AST抽象语法树优化、代码生成等相关代码。")]),e._v(" "),t("p",[e._v("编译的工作可以在构建时用"),t("code",[e._v("runtime-only")]),e._v("版本，借助"),t("code",[e._v("webpack")]),e._v("和"),t("code",[e._v("vue-loader")]),e._v("等工具或插件来进行编译。也可以在运行时，使用包含构建功能的"),t("code",[e._v("runtime + compiler")]),e._v("版本。")]),e._v(" "),t("p",[e._v("显然，编译是一项比较消耗性能的工作，所以我们日常的开发中，更推荐使用"),t("code",[e._v("runtime-only")]),e._v("的版本开发(体积也更小)，也就是通过"),t("code",[e._v(".vue")]),e._v("文件的形式开发，而不是通过如下的方式：")]),e._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" myComponent "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  template"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'<div>hello,world</div>'")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),t("h2",{attrs:{id:"core"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#core","aria-hidden":"true"}},[e._v("#")]),e._v(" Core")]),e._v(" "),t("p",[t("code",[e._v("core")]),e._v("目录包含了"),t("code",[e._v("Vue.js")]),e._v("的核心代码，包括：内置组件("),t("code",[e._v("keep-alive")]),e._v(")、全局API("),t("code",[e._v("Vue.use")]),e._v("、"),t("code",[e._v("Vue.mixin")]),e._v("和"),t("code",[e._v("Vue.extend")]),e._v("等)、Vue实例化、响应式相关、虚拟DOM和工具函数等。")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("-- core\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("   "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("-- components      "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 内助组件")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("   "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("-- global-api      "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 全局API")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("   "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("-- instance        "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 实例化")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("   "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("-- observer        "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 响应式")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("   "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("-- util            "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 工具函数")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("   "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("-- vdom            "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 虚拟DOM")]),e._v("\n")])])]),t("h2",{attrs:{id:"platform"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#platform","aria-hidden":"true"}},[e._v("#")]),e._v(" Platform")]),e._v(" "),t("p",[t("code",[e._v("Vue.js")]),e._v("是一个跨平台的"),t("code",[e._v("MVVM")]),e._v("框架。在"),t("code",[e._v("React")]),e._v("中，有"),t("code",[e._v("React Native")]),e._v("跨平台客户端，而在"),t("code",[e._v("Vue")]),e._v("中其对应的跨平台就是"),t("code",[e._v("Weex")]),e._v("。"),t("code",[e._v("platform")]),e._v("有2个目录：")]),e._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("--")]),e._v(" platform\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("   "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("--")]),e._v(" web      # web平台浏览器端\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("   "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("--")]),e._v(" weex     # native客户端\n")])])]),t("h2",{attrs:{id:"server"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#server","aria-hidden":"true"}},[e._v("#")]),e._v(" Server")]),e._v(" "),t("p",[t("code",[e._v("Vue.js2.0")]),e._v("开始就支持了服务端渲染，所有跟服务端渲染相关的代码都在"),t("code",[e._v("server")]),e._v("目录下，此部分代码是运行在服务端，而非Web浏览器端。")]),e._v(" "),t("h2",{attrs:{id:"sfc"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sfc","aria-hidden":"true"}},[e._v("#")]),e._v(" Sfc")]),e._v(" "),t("p",[e._v("通常来说，我们开发"),t("code",[e._v("Vue")]),e._v("应用是借助了"),t("code",[e._v("Webpack")]),e._v("等工具的构建，然后通过"),t("code",[e._v(".vue")]),e._v("单文件来编写组件，而"),t("code",[e._v("vue-loader")]),e._v("就是专门用来解析"),t("code",[e._v(".vue")]),e._v("文件的。这个目录下的代码，只要作用是把"),t("code",[e._v(".vue")]),e._v("文件解析成一个"),t("code",[e._v("JavaScript")]),e._v("对象。")]),e._v(" "),t("h2",{attrs:{id:"shared"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#shared","aria-hidden":"true"}},[e._v("#")]),e._v(" Shared")]),e._v(" "),t("p",[e._v("此目录下存放了一些在Web浏览器端和服务端都会用到的共享代码。")])])},[],!1,null,null,null);a.default=r.exports}}]);