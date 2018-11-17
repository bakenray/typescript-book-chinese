(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{193:function(t,s,a){"use strict";a.r(s);var n=a(0),o=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("TypeScript 的类型系统是结构化的，"),a("a",{attrs:{href:"https://basarat.gitbooks.io/typescript/content/docs/why-typescript.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),a("OutboundLink")],1),t._v("有个主要的原因。然而，在实际项目中可能是你想区分两个类型不同的变量，尽管它们具有相同的结构。一个非常常见的实际用例是身份的验证（它们可能只是在 C# 或者 Java 中表示一个它们语义化名字的字符串）。")]),t._v(" "),a("p",[t._v("这有一些社区推荐的方式，我按照个人爱好降序排列：")]),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("这种模式使用泛型和字面量类型：")]),t._v(" "),t._m(2),t._m(3),t._v(" "),t._m(4),t._v(" "),a("p",[t._v("TypeScript 中"),a("router-link",{attrs:{to:"./../typings/enums.html"}},[t._v("枚举")]),t._v(" 提供一定程度的名义化类型。如果两个枚举的命名不相同，则它们类型不相等。我们可以利用这个事实来为结构上兼容的类型，提供名义化类型。")],1),t._v(" "),a("p",[t._v("解决办法包括：")]),t._v(" "),t._m(5),t._v(" "),a("p",[t._v("如下所示，当实际结构体仅仅是一个字符串时：")]),t._v(" "),t._m(6),t._m(7),t._v(" "),a("p",[t._v("因为 "),a("code",[t._v("number")]),t._v(" 类型与 "),a("code",[t._v("enum")]),t._v(" 类型在类型上是兼容的，因此我们不能使用上述提到的方法来处理它们。取而代之，我们可以使用接口打破这种类型的兼容性。TypeScript 编译团队仍然在使用这种方法，因此它值得一提。使用 "),a("code",[t._v("_")]),t._v(" 前缀和 "),a("code",[t._v("Brand")]),t._v(" 后缀是一种我强烈推荐的惯例方法（"),a("a",{attrs:{href:"https://github.com/Microsoft/TypeScript/blob/7b48a182c05ea4dea81bab73ecbbe9e013a79e99/src/compiler/types.ts#L693-L698",target:"_blank",rel:"noopener noreferrer"}},[t._v("TypeScript 也这么推荐"),a("OutboundLink")],1),t._v("）。")]),t._v(" "),a("p",[t._v("解决办法包括：")]),t._v(" "),t._m(8),t._v(" "),a("p",[t._v("如下所示：")]),t._v(" "),t._m(9)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"名义化类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#名义化类型","aria-hidden":"true"}},[this._v("#")]),this._v(" 名义化类型")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"使用字面量类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用字面量类型","aria-hidden":"true"}},[this._v("#")]),this._v(" 使用字面量类型")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// 泛型 Id 类型")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("type")]),t._v(" Id"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),a("span",{attrs:{class:"token constant"}},[t._v("T")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("string")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("type")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("T")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  value"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("string")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 特殊的 Id 类型")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("type")]),t._v(" FooId "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Id"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),a("span",{attrs:{class:"token string"}},[t._v("'foo'")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("type")]),t._v(" BarId "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Id"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),a("span",{attrs:{class:"token string"}},[t._v("'bar'")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 可选：构造函数")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" createFoo "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("string")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" FooId "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("type")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'foo'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" createBar "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("string")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" BarId "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("type")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'bar'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" foo "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("createFoo")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'sample'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" bar "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("createBar")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'sample'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nfoo "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" bar"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// Error")]),t._v("\nfoo "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" foo"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// Okey")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("优点\n"),s("ul",[s("li",[this._v("不需要类型断言。")])])]),this._v(" "),s("li",[this._v("缺点\n"),s("ul",[s("li",[this._v("如上结构 "),s("code",[this._v("{type,value}")]),this._v(" 可能不那么尽如人意，而且需要服务器序列化支持。")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"使用枚举"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用枚举","aria-hidden":"true"}},[this._v("#")]),this._v(" 使用枚举")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("创建一个只有名字的枚举；")]),this._v(" "),s("li",[this._v("利用这个枚举与实际结构体创建一个交叉类型（"),s("code",[this._v("&")]),this._v("）。")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// FOO")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("enum")]),t._v(" FooIdBrand "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("type")]),t._v(" FooId "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" FooIdBrand "),a("span",{attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("string")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// BAR")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("enum")]),t._v(" BarIdBrand "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("type")]),t._v(" BarId "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" BarIdBrand "),a("span",{attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("string")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// user")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" fooId"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" FooId"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" barId"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" BarId"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 类型安全")]),t._v("\nfooId "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" barId"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// error")]),t._v("\nbarId "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" fooId"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// error")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 创建一个新的")]),t._v("\nfooId "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'foo'")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("as")]),t._v(" FooId"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nbarId "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'bar'")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("as")]),t._v(" BarId"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 两种类型都与基础兼容")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" str"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("string")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nstr "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" fooId"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nstr "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" barId"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"使用接口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用接口","aria-hidden":"true"}},[this._v("#")]),this._v(" 使用接口")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("在类型上添加一个不用的属性，用来打破类型兼容性；")]),this._v(" "),s("li",[this._v("在需要的时候使用类型断言。")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// FOO")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("FooId")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  _fooIdBrand"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("string")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 防止类型错误")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// BAR")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("BarId")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  _barIdBrand"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("string")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 防止类型错误")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 使用")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" fooId"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" FooId"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" barId"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" BarId"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 类型安全")]),t._v("\nfooId "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" barId"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// error")]),t._v("\nbarId "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" fooId"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// error")]),t._v("\nfooId "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("FooId"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("barId"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// error")]),t._v("\nbarId "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("BarId"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("fooId"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// error")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 创建新的")]),t._v("\nfooId "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'foo'")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("any")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nbarId "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'bar'")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("any")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 如果你需要以字符串作为基础")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" str"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("string")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nstr "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" fooId "),a("span",{attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("any")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nstr "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" barId "),a("span",{attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("any")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])}],!1,null,null,null);o.options.__file="nominalTyping.md";s.default=o.exports}}]);