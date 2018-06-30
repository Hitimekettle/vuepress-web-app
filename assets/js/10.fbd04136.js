(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{307:function(t,e,n){"use strict";n.r(e);var a=n(1),s=Object(a.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("p",[t._v("于 2017 年初，有在 "),n("code",[t._v("Github")]),t._v(" 建立并维护一个项目："),n("a",{attrs:{href:"https://github.com/nicejade/vue-boilerplate-template",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue Boilerplate Template"),n("OutboundLink")],1),t._v("，欲成就一款开箱即用 "),n("code",[t._v("Vue")]),t._v(" + "),n("code",[t._v("Webpack")]),t._v(" 的脚手架模版；其目标与宗旨是：根据以往经验提供一些参考，对于如何构建中大型 "),n("code",[t._v("Vue")]),t._v(" 项目。这蛮久以来，有坚持维护更新，各项主要依赖库，基本都保持着同步升级；记载这篇文章，即是对关于它的设计做下更全面的阐述，以起到项目 "),n("code",[t._v("Wiki")]),t._v(" 的作用；同时探讨“如何更高效开发单页面应用”。")]),t._m(0),n("h3",{attrs:{id:"关于此-vue、webpack-脚手架模版"}},[n("strong",[t._v("关于此 "),n("a",{attrs:{href:"https://github.com/nicejade/vue-boilerplate-template",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue、Webpack 脚手架模版"),n("OutboundLink")],1)])]),n("p",[t._v("这是一个用以开发 Web 单页应用的脚手架项目；谨以 "),n("code",[t._v("Vue")]),t._v(" 为开发框架、"),n("code",[t._v("Webpack")]),t._v(" 为构建工具，"),n("code",[t._v("element-ui")]),t._v(" 为 UI 组件库；同时注入了 "),n("code",[t._v("vue-router")]),t._v("、"),n("code",[t._v("vuex")]),t._v("、"),n("code",[t._v("vue-i18n")]),t._v("，用以支持单页应用，复杂的状态管理，以及多语言设定；另外依赖了 "),n("code",[t._v("lodash")]),t._v("、"),n("code",[t._v("dayjs")]),t._v("、"),n("code",[t._v("js-cookie")]),t._v(" 等开发工具库，以提升页面开发效率。当然，在实际项目中，可根据实际需要自由移除或者修改。在此项目中提供了两个演示页，您可以"),n("a",{attrs:{href:"https://blog.lovejade.cn/vue-boilerplate-template/",target:"_blank",rel:"noopener noreferrer"}},[t._v("在线查看"),n("OutboundLink")],1),t._v("。")]),n("p",[t._v("对于如何使用这款脚手架模版，例如"),n("code",[t._v("先决条件")]),t._v("，"),n("code",[t._v("用法")]),t._v("等在 "),n("a",{attrs:{href:"https://github.com/nicejade/vue-boilerplate-template/blob/master/README.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("README"),n("OutboundLink")],1),t._v(" 中已做说明，此处就不在赘述。此脚手架模版，是基于 "),n("a",{attrs:{href:"https://github.com/vuejs/vue-cli",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue-cli"),n("OutboundLink")],1),t._v(" 所构建，那时 "),n("code",[t._v("vue-cli")]),t._v(" 版本还在 "),n("strong",[t._v("2.*")]),t._v("；再有就是，主张项目是可以"),n("strong",[t._v("开箱即用")]),t._v("，像 "),n("code",[t._v("vuex")]),t._v("、 "),n("code",[t._v("eslint")]),t._v("、"),n("code",[t._v("sass")]),t._v(" 等都默认引入（其好处在于：可以清晰较为全套的项目设定；倘若无需多语言，可在此基础之上做减法，移除 "),n("code",[t._v("vue-i18n")]),t._v(" 及相关代码即可；二来，也无需编写些额外代码，来支持用户选择性注入依赖，以节省精力，开发更多有价值的功能；三来，这也算是一种"),n("strong",[t._v("道")]),t._v("的提倡，像 "),n("code",[t._v("eslint")]),t._v("、 "),n("code",[t._v("pre-commit")]),t._v(" 等对于团队项目，都是极为必要的存在，默认引入，也算理所应当）；所以其整个目录结构是这样：")]),t._m(1),t._m(2),n("p",[t._v("先从环境说起；众所周知，鉴于 "),n("code",[t._v("JavaScript")]),t._v(" 的发展历史，随着其版本的不断更新，更多新语法和代码特性被引入进来，使得编写 JavaScript 体验持续迈向更好。虽然部分浏览器没有能提供很好的支持，但此脚手架已然引入 "),n("a",{attrs:{href:"https://babeljs.cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("babel"),n("OutboundLink")],1),t._v(" 系依赖，您可以放心放心 "),n("code",[t._v("ES6")]),t._v(" 甚至更超前版本，而不用担心造成兼容性问题。同样，对于 "),n("code",[t._v("CSS")]),t._v(" 也是一样，这里已引入 "),n("code",[t._v("autoprefixer")]),t._v("，并作了相应设定，您可以放心使用新特性、预处理语言等，而不用关注浏览器供应商前缀。")]),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),n("p",[t._v("如上这般，您就不用在使用时候反复 "),n("code",[t._v("import")]),t._v("， 直接像这样 "),n("code",[t._v("this.$_.debounce")]),t._v(" 使用即可，从而大幅度节省您的编写时间开支；对于其中 "),n("code",[t._v("$")]),t._v(" 符号，是个人偏爱的标记，以方便知晓其是来自全局；当然，您可以修改为您所欢喜的记号。您可以看到在 "),n("code",[t._v("helper")]),t._v(" 文件夹下，特意开辟出一个文件 "),n("code",[t._v("lodash.js")]),t._v("，用以优化对 "),n("code",[t._v("lodash")]),t._v(" 的使用，同时也是为了方便使用；这在 "),n("a",{attrs:{href:"https://jeffjade.com/2017/08/06/124-webpack-packge-optimization-for-volume/#%E5%B0%BD%E9%87%8F%E4%BD%BF%E7%94%A8%E6%A8%A1%E5%9D%97%E5%8C%96%E5%BC%95%E5%85%A5",target:"_blank",rel:"noopener noreferrer"}},[t._v("《Webpack 打包优化之体积篇》的 "),n("code",[t._v("尽量使用模块化引入")]),n("OutboundLink")],1),t._v(" 中有过详细叙述。同理，您可以对所引入的各类库，进行再次封装，以使得再项目中可便捷调用，同时可以统一修改、更替，而无需操作调用的地方。另外，值得一提的是对于 HTTP 请求相关的处理。")]),t._m(8),t._m(9),t._m(10),n("p",[n("strong",[t._v("大道至简")]),t._v("，优秀的开发流程，一定是便于编写和维护！本脚手架引用类库 "),n("code",[t._v("axios")]),t._v(" 和 "),n("code",[t._v("q")]),t._v("，并对其进行简单封装，以处理 Http 请求相关；使其能够支持链式调用，同时对返回数据统一处理，精简返回内容，使得在获取到最终结果处，可以尽可能简单，详见 "),n("code",[t._v("helper/ajax.js")]),t._v("；另外，推荐开发者将接口，按照功能模块规划，分门别类以存放至统一文件夹下，如 "),n("code",[t._v("helper/apis")]),t._v("；如此清晰明了，方便调用，且对于多人协作开发，又不相互响应，减少不必要的冲突。类似善用配置，以"),n("strong",[t._v("表驱动法")]),t._v("的编程手法，应该活学活用，贯穿始终；具体更详细的陈述，可参见 "),n("a",{attrs:{href:"https://jeffjade.com/2017/03/11/120-how-to-write-vue-better/#%E5%A6%82%E4%BD%95%E6%BC%82%E4%BA%AE%E4%BD%BF%E7%94%A8-Vue-%E4%B9%8B%E5%9F%BA%E7%A1%80%E7%AF%87",target:"_blank",rel:"noopener noreferrer"}},[t._v("如何漂亮使用 Vue 之基础篇"),n("OutboundLink")],1),t._v("。倘若以此法来处理 Http 请求，那如上磨人的示例，即可修改为如下模样：")]),t._m(11),t._m(12),t._m(13),t._m(14),t._m(15),n("p",[t._v("这是此脚手架一大亮点，即保持着对主流依赖库的更新及优化，如："),n("code",[t._v("webpack")]),t._v("、"),n("code",[t._v("element-ui")]),t._v(" 等。使用 "),n("code",[t._v("webpack")]),t._v(" 来构建 Web 应用程序，如何使其呈现良好的构建速度、优化构建后包体积/文件数量、提升其运行效率等，是每位前端开发者都该去了解的。在这方面，也作了很多学习与尝试，并将些经验记载于："),n("a",{attrs:{href:"http://jeffjade.com/2017/08/06/124-webpack-packge-optimization-for-volume/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Webpack 打包优化之体积篇"),n("OutboundLink")],1),t._v(" & "),n("a",{attrs:{href:"http://jeffjade.com/2017/08/12/125-webpack-package-optimization-for-speed/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Webpack 打包优化之速度篇"),n("OutboundLink")],1),t._v("。关于其配置方案，参见 "),n("a",{attrs:{href:"https://github.com/nicejade/vue-boilerplate-template/blob/master/build/webpack.prod.conf.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue Webpack Config"),n("OutboundLink")],1),t._v("；当然，十分欢迎提出您宝贵的建议，协助进一步完善之。另外，值得一提的是，关于构建包的体积与文件数的平衡：避免造成体量很大或很小的包；对此，"),n("code",[t._v("Webpack")]),t._v(" 方面也提供很多插件来辅助这件事，譬如："),n("code",[t._v("LimitChunkCountPlugin")]),t._v("、"),n("code",[t._v("MinChunkSizePlugin")]),t._v("。鉴于 HTTP 工作机制，在不破坏按需加载的基础上，使得所构建出的 js 文件，数量尽可能少，文件又不过大(100kb ~ 500kb)是一个不错的选择，当然这里指的的是服务端开启 "),n("code",[t._v("gip")]),t._v(" 压缩的情况下；如果是由前端负责开启 "),n("code",[t._v("gzip")]),t._v(" 压缩，这个 Size 上限应该更低些为宜。除了外，考虑通过 "),n("code",[t._v("HTTP/2")]),t._v(" 来对项目项目进行优化，是另一个纬度的解决方案，在此就不多做探讨。")]),t._m(16),n("p",[t._v("渐进式 Web 应用程序（"),n("code",[t._v("PWA")]),t._v(" ～ "),n("a",{attrs:{href:"https://developers.google.com/web/progressive-web-apps/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Progressive Web App"),n("OutboundLink")],1),t._v("）：它的存在，使得在网络上提供惊人用户体验的新方式，它为构建高质量的渐进式 Web 应用程序，提供了令人难以置信的优势，可以轻松取悦用户，增加参与度并增加转化次数。所以这已经成为了现代化 Web 应用程序必做工作。本脚手架对 "),n("code",[t._v("PWA")]),t._v(" 的支持，选择参考了 "),n("a",{attrs:{href:"https://github.com/vuejs-templates/pwa",target:"_blank",rel:"noopener noreferrer"}},[t._v("vuejs-templates/pwa"),n("OutboundLink")],1),t._v("，其中用到 "),n("a",{attrs:{href:"https://github.com/goldhand/sw-precache-webpack-plugin",target:"_blank",rel:"noopener noreferrer"}},[t._v("sw-precache-webpack-plugin"),n("OutboundLink")],1),t._v(" 插件协助生成 "),n("code",[t._v("service-worker.js")]),t._v("。鉴于 "),n("code",[t._v("serviceWorker")]),t._v(" 本身的些许限制，此模版默认不引入此功能，取消"),n("a",{attrs:{href:"https://github.com/nicejade/vue-boilerplate-template/blob/master/index.ejs?#L42",target:"_blank",rel:"noopener noreferrer"}},[t._v("此行被注释的代码"),n("OutboundLink")],1),t._v("，即可打开该功能。关于这部分更多，可参见"),n("a",{attrs:{href:"https://github.com/nicejade/nicelinks-vue-client/issues/24",target:"_blank",rel:"noopener noreferrer"}},[t._v("优化网页 Performance、Progressive、Accessibility、Best Practices"),n("OutboundLink")],1),t._v(" 相关提交 & 陈述。推荐您使用 "),n("code",[t._v("Lighthouse")]),t._v(" 谷歌浏览扩展，来对自己的 Web 应用跑分，以查纠项目中潜存的可优化点。")]),t._m(17),t._m(18),t._m(19),t._m(20),t._m(21),n("ul",[n("li",[n("a",{attrs:{href:"https://nicelinks.site?from=vue-webpack",target:"_blank",rel:"noopener noreferrer"}},[t._v("「倾城之链｜NICE LINKS」"),n("OutboundLink")],1),t._v("：一个开放平台，旨在云集全球优秀网站，探索互联网中更广阔的世界；在这里，你可以轻松发现、学习、分享更多有用或有趣的事物。")])]),t._m(22),n("ul",[n("li",[n("strong",[t._v("完善"),n("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/unit-testing.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("单元测试"),n("OutboundLink")],1),t._v("相关")]),t._v("；在代码层面，做好单元测试，有助于提升代码质量，从而使得项目质量、后续维护都可以更好。考虑将在之后的版本中，参考 "),n("a",{attrs:{href:"https://vue-test-utils.vuejs.org/zh-cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue Test Utils"),n("OutboundLink")],1),t._v(" 对这块儿进行完善。")]),n("li",[n("strong",[t._v("SEO 优化相关")]),t._v("；这是多方都应该考虑的问题；但在项目设计层面，可以考虑"),n("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/ssr.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("服务端渲染"),n("OutboundLink")],1),t._v("来极大提升 SEO （如："),n("a",{attrs:{href:"https://github.com/nuxt/nuxt.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("Nuxt"),n("OutboundLink")],1),t._v("）；但这对于已经处于开发阶段的项目，涉及需要更多的调整，相比于其他的可选方案。"),n("a",{attrs:{href:"https://nicelinks.site?from=vue-webpack",target:"_blank",rel:"noopener noreferrer"}},[t._v("「倾城之链｜NICE LINKS」"),n("OutboundLink")],1),t._v(" 是基于 "),n("a",{attrs:{href:"https://github.com/prerender/prerender",target:"_blank",rel:"noopener noreferrer"}},[t._v("prerender"),n("OutboundLink")],1),t._v("，在 "),n("code",[t._v("nginx")]),t._v(" 层面，针对浏览器作预渲染以优化 SEO，现在看起来效果可以。 另外可以选择的方案是运用 "),n("a",{attrs:{href:"https://github.com/chrisvfritz/prerender-spa-plugin",target:"_blank",rel:"noopener noreferrer"}},[t._v("Prerender SPA Plugin"),n("OutboundLink")],1),t._v("，在 "),n("code",[t._v("Webpack")]),t._v(" 构建项目时预渲染静态 html 内容，；在未来版本中，会考虑针对这块儿给出一个相对折中的方案。")])]),t._m(23),t._m(24),n("p",[t._v("对于分享，您的海量包容和意见建议，是促进彼此都能"),n("strong",[t._v("更上一层楼")]),t._v("的关键。输出文字，总是比写代码辛苦的多；在付出多时的敲敲打打之后，希望可以得到您宝贵的意见和建议，使得此脚手架可以更进一步，以惠及到更多的人。最后，推荐您体验个人最新作品 ～ "),n("a",{attrs:{href:"https://nicelinks.site?from=vue-webpack",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("「倾城之链｜NICE LINKS」")]),n("OutboundLink")],1),t._v("： "),n("strong",[t._v("倾心缔造，痴心为你")]),t._v("，希望您会喜欢。")]),n("p",[t._v("@2018-05-13 于深圳.南山 Last Modify： 2018-05-20")]),n("hr"),t._m(25),n("ul",[n("li",[n("a",{attrs:{href:"https://jeffjade.com/2017/03/11/120-how-to-write-vue-better/",target:"_blank",rel:"noopener noreferrer"}},[t._v("如何写一手漂亮的Vue"),n("OutboundLink")],1)]),n("li",[n("a",{attrs:{href:"https://jeffjade.com/2017/08/12/125-webpack-package-optimization-for-speed/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Webpack 打包优化之速度篇"),n("OutboundLink")],1)]),n("li",[n("a",{attrs:{href:"https://jeffjade.com/2017/08/06/124-webpack-packge-optimization-for-volume/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Webpack 打包优化之体积篇"),n("OutboundLink")],1)]),n("li",[n("a",{attrs:{href:"https://jeffjade.com/2017/12/30/135-npm-vs-yarn-detial-memo/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Npm vs Yarn 之备忘详单"),n("OutboundLink")],1)]),n("li",[n("a",{attrs:{href:"https://jeffjade.com/2016/03/30/104-front-end-tutorial/",target:"_blank",rel:"noopener noreferrer"}},[t._v("『引』最全前端资源汇集"),n("OutboundLink")],1)]),n("li",[n("a",{attrs:{href:"https://jeffjade.com/2017/09/28/127-nice-front-end-tutorial/",target:"_blank",rel:"noopener noreferrer"}},[t._v("与时俱进版前端资源教程"),n("OutboundLink")],1)]),n("li",[n("a",{attrs:{href:"https://jeffjade.com/2017/10/09/130-front-end-notes/",target:"_blank",rel:"noopener noreferrer"}},[t._v("晚晴幽草说之-前端札记"),n("OutboundLink")],1)]),n("li",[n("a",{attrs:{href:"https://jeffjade.com/2016/05/14/106-front-end-learning-record/",target:"_blank",rel:"noopener noreferrer"}},[t._v("所历前端“姿势”更替记(其一)"),n("OutboundLink")],1)]),n("li",[n("a",{attrs:{href:"https://jeffjade.com/2015/02/01/2015-02-01-recommended-article/",target:"_blank",rel:"noopener noreferrer"}},[t._v("墙裂推荐文章集锦"),n("OutboundLink")],1)])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/207604-a54643052962985d.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"题图来自 picjumbo.com"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("├── LICENSE --------------- 项目许可证（MIT License）文件\n├── build ----------------- 存放项目构建相关文件\n├── config ---------------- 存放项目构建相关配置文件\n├── dist ------------------ 存放项目构建后的输出文件\n├── index.ejs ------------- 项目起始文件 "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("/index.html"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n├── package-lock.json ----- 记录用 "),n("span",{attrs:{class:"token function"}},[t._v("npm")]),t._v(" 修改依赖操作的锁文件\n├── package.json ---------- "),n("span",{attrs:{class:"token function"}},[t._v("npm")]),t._v(" 的 package.json 处理细节\n├── src ------------------- 项目程序主代码文件夹\n│   ├── App.vue ----------- 应用程序的主组件\n│   ├── assets ------------ 存放资源：样式、图片、字体\n│   ├── components -------- 项目自定义的公共组件\n│   ├── constants --------- 项目自定义的公共常量\n│   ├── filters.js -------- 项目自定义的 vue 过滤指令\n│   ├── global.js --------- 协助分担 main.js 工作\n│   ├── helper ------------ 项目自定义辅助各类工具\n│   ├── locales ----------- 存放"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("公用"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("多语言配置\n│   ├── main.js ----------- 项目代码的人口文件\n│   ├── mixins ------------ 存放 mixin 代码相关\n│   ├── router ------------ 存放 "),n("span",{attrs:{class:"token operator"}},[t._v("&")]),t._v(" 处理路由相关\n│   ├── store ------------- 存放 "),n("span",{attrs:{class:"token operator"}},[t._v("&")]),t._v(" 处理 Vuex 相关\n│   └── views ------------- 存放项目页面代码\n├── static ---------------- 静态的 assets"),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("不被 webpack 处理"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n├── "),n("span",{attrs:{class:"token function"}},[t._v("test")]),t._v(" ------------------ 项目各类测试相关\n└── yarn.lock ------------- 记录用 yarn 修改依赖操作的锁文件\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"项目背后的环境设定"}},[e("strong",[this._v("项目背后的环境设定")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"代码及提交规则约束"}},[e("strong",[this._v("代码及提交规则约束")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("这是至关重要的，对于代码的设计和编写；因为："),n("strong",[t._v("代码首先是写给人，然后才是写给机器")]),t._v(" —— 出自《代码大全》。在设计代码时候，为其赋予"),n("strong",[t._v("可读性")]),t._v("而花费的时间和努力，绝对物有所值；然而，要求每位成员自觉保持代码统一质量/风格，这种事情的难度，不亚于靠一己之力去上青天。所以 "),n("code",[t._v("eslint")]),t._v(" 系依赖，绝对是团队项目必装神器；并将其注入于 "),n("code",[t._v("Git")]),t._v(" 的 "),n("code",[t._v("pre-commit")]),t._v(" 钩子内，以强制约定尽可能统一代码风格；此时江山一统，方有可传万世之机。另外，对于代码的提交，也是同理，图一时之省心，而提交的无意义 "),n("code",[t._v("message")]),t._v("，这并不是好习惯；因为"),n("strong",[t._v("当你回头再看，你会发觉所有错的事情，都发生在最对的时间里")]),t._v("。幸好的是，对于这些工作，此脚手架已经帮您做好；当然您可以根据团队整体喜好而作调整。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"所提供的全局性方法"}},[e("strong",[this._v("所提供的全局性方法")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("对于代码的编写效率，也是尤为的重要；毕竟：“"),n("strong",[t._v("天下武功，唯快不破")]),t._v("；即便说"),n("strong",[t._v("轻功不表武功，但速度决定了你我の距离")]),t._v("”；更严肃的作证这个观点是：只有快速完成需求，才有时间去学习更多、或在关键点上作优化。故此，在此脚手架中，已将常用的工具、插件、方法，通过添加至 Vue 全局实例，以方便调用；譬如：通过添加至 "),n("code",[t._v("Vue.prototype")]),t._v("，或者全局 "),n("code",[t._v("mixin")]),t._v("("),n("em",[t._v("minxns/globalMixin.js")]),t._v(") 以及过滤("),n("em",[t._v("filters.js")]),t._v(")等；")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("import _ from '@helper/lodash.js'\nimport { $apis, $utils } from '@helper'\n\nVue.prototype.$_ = _\nVue.prototype.$apis = $apis\nVue.prototype.$utils = $utils\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"更优雅的处理-http-请求"}},[e("strong",[this._v("更优雅的处理 Http 请求")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("下面是一个上古时代关于处理 Http 请求的实例；以现在的视角来看，它显得有些极端，甚至有些不可思议，却是至今仍然屡见不鲜的玩法（即使用的是当下流行的 "),e("code",[this._v("MVVM")]),this._v(" 框架，即便 Query.ajax 也是支持链式调用）；然而，不乏有勤劳的开发者，不厌其烦的写着类似的代码，这本身倒也没什么；但当交给别人去维护、或者去读的时候，容易造成身心上的创伤。")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("$"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("ajax")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  type"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"GET"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  url"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"xxx/getYyyContent"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  data"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" username"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("$")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"#username"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("val")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  dataType"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"json"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  success"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" textContent "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" data"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("textContent\n    "),n("span",{attrs:{class:"token function"}},[t._v("$")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'#text-content'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("html")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("textContent"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  error"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// Do something to handle Error")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  complete"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// 做额外的处理无论请求成功或失败")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" params "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" username"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("form"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("username "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$apis"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("xxx"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("getYyyContent")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("params"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("then")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("textContent "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" result"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("textContent\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token keyword"}},[t._v("catch")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// Do something to handle Error")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("fin")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// 做额外的处理无论请求成功或失败")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"贴心的路由（router）配置"}},[e("strong",[this._v("贴心的路由（Router）配置")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("使用 "),n("code",[t._v("MVVM")]),t._v(" 框架 + "),n("code",[t._v("*-router")]),t._v(" 来创建单页应用，已成为一种主流。在此脚手架中，已将 "),n("code",[t._v("vue-router")]),t._v(" 添加进来，并进行了处理；并附有示例："),n("code",[t._v("router/routes/demo.js")]),t._v("；您可以自由的添加路由及页面映射，来丰盈您的应用程序；同时，您还能为其配置各种页面信息（如：标题、是否须权限验证等）。 对于路由配置，更为贴心的配置，在处理与"),n("strong",[t._v("导航栏")]),t._v("(/侧边栏)相关部分。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("在前后端分离的现代化 "),e("code",[this._v("Web")]),this._v(" 应用中，"),e("code",[this._v("导航栏")]),this._v("配置一般由前后端共同作用：后端负责给予相关配置数据，前端则掌管数据与页面的映射；为了节省工作量，深度拷贝前端路由配置，递归遍历移除无需在"),e("code",[this._v("导航栏")]),this._v("展示项，再融合后端数据，即可组装出一套后台可配置的应用导航列表，而不用牵扯改动前端。当然，您可以根据业务需求，添加更多设定，使得程序拥有更佳的访问、维护体验。比如：为避免每次刷新界面，都发起请求导航栏数据，应将持久化存储（Eg：localStorage）等等。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"完善的-webpack-打包优化"}},[e("strong",[this._v("完善的 Webpack 打包优化")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"支持渐进式-web-应用程序"}},[e("strong",[this._v("支持渐进式 Web 应用程序")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("需要补充说明的是：您可以在项目全局搜索 "),e("code",[this._v("~@CHANGE@~")]),this._v(" 关键字，这是对于可变化设定的标记；您可以根据项目实际所需，对该部分进行修改。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"脚手架提供的默认命令"}},[e("strong",[this._v("脚手架提供的默认命令")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("您知道，"),n("code",[t._v("npm")]),t._v("（"),n("code",[t._v("yarn")]),t._v(" 亦同）允许在 "),n("code",[t._v("package.json")]),t._v(" 文件里面，使用 "),n("code",[t._v("scripts")]),t._v(" 字段定义脚本命令。它支持通配符、变量、钩子、外部传参、支持并发 & 异步执行等等；所以，完全可以借助 "),n("code",[t._v("npm script")]),t._v("，打造属于自己的高效工作流。在此脚手架中，默认只是些提供了简单命令，您可以在自己的脚本中，结合您欢喜的工具，如 "),n("code",[t._v("gulp")]),t._v("、"),n("code",[t._v("bash")]),t._v(" 等，来塑造属于您的高效工作流。下面对默认命令略作说明：")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",[n("thead",[n("tr",[n("th",{staticStyle:{"text-align":"left"}},[t._v("npm (yarn) 命令")]),n("th",{staticStyle:{"text-align":"left"}},[t._v("功能描述")])])]),n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("yarn start")]),n("td",{staticStyle:{"text-align":"left"}},[t._v("运行项目以开发环境，是 "),n("code",[t._v("yarn run dev")]),t._v(" 的快捷版方式")])]),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("yarn run build:dll")]),n("td",{staticStyle:{"text-align":"left"}},[t._v("构建出 "),n("code",[t._v("vendor.dll.js")]),t._v("，依据 "),n("code",[t._v("webpack.dll.conf.js")])])]),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("yarn run build")]),n("td",{staticStyle:{"text-align":"left"}},[t._v("构建项目，以生产环境")])]),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("yarn run jarvis")]),n("td",{staticStyle:{"text-align":"left"}},[t._v("运行 "),n("code",[t._v("webpack-jarvis")]),t._v("（非常智能的基于浏览器的Webpack仪表板）在 http://localhost:1337/")])]),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("yarn run analyz")]),n("td",{staticStyle:{"text-align":"left"}},[t._v("对所构建的包进行可视化呈现，在 http://localhost:8888/")])]),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("yarn run preview")]),n("td",{staticStyle:{"text-align":"left"}},[t._v("对项目进行在本地预览，以生产环境，在 http://localhost:3000/")])]),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[t._v("yarn run pretest")]),n("td",{staticStyle:{"text-align":"left"}},[t._v("对生产环境所构建的包进行简单的“预测”：在 http://localhost:3000/")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"使用此脚手架的线上项目"}},[e("strong",[this._v("使用此脚手架的线上项目")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"项目待优化的那些方向"}},[e("strong",[this._v("项目待优化的那些方向")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("strong",[t._v("塑造更便捷的前端开发环境")]),t._v("；这里所言的"),n("code",[t._v("开箱即用")]),t._v("，仍需要在您已经安装高版本 "),n("code",[t._v("node")]),t._v(" 的前提；这对于新晋开发着并不是友好；如果，您使用的是基于 "),n("code",[t._v("windows")]),t._v(" 系统的环境，并不能保证这套脚手架可以很顺利运行(😌)；因此，有考虑借助 "),n("code",[t._v("Docker")]),t._v(" 等工具，优化前端开发环境，使其可以更新便捷，而无需依赖更多。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"写在最后的结语"}},[e("strong",[this._v("写在最后的结语")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"你可能感兴趣-有用-的文章："}},[e("strong",[this._v("你可能感兴趣(/有用)的文章：")])])}],!1,null,null,null);e.default=s.exports}}]);