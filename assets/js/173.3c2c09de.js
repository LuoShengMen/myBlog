(window.webpackJsonp=window.webpackJsonp||[]).push([[173],{212:function(e,t,a){"use strict";a.r(t);var r=a(0),v=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h3",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[e._v("#")]),e._v(" 前言")]),e._v(" "),a("p",[e._v("浏览器是我们日常开发的重要的工具，那么你了解浏览器吗？即使在前端面试中，我们也经常会遇到：在浏览器地址中从输入url地址到出现页面，这个过程发生了什么？介绍一下重绘和回流？这一类关于浏览器的问题。我们可能会知道大概的轮廓但对于具体的细节却是不那么清楚，那么今天我们就从浏览器内核开始来了解一下浏览器的渲染机制\n")]),e._v(" "),a("h3",{attrs:{id:"浏览器组成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器组成","aria-hidden":"true"}},[e._v("#")]),e._v(" 浏览器组成")]),e._v(" "),a("p",[e._v("浏览器主要由7个部分组成：")]),e._v(" "),a("ul",[a("li",[e._v("用户界面（User Interface）：定义了一些常用的浏览器组件，比如地址栏，返回、书签等等")]),e._v(" "),a("li",[e._v("数据持久化（Data Persistence）：指浏览器的cookie、local storage等组件")]),e._v(" "),a("li",[e._v("浏览器引擎（Browser engine）：平台应用的相关接口，在用户界面和呈现引擎之间传送指令。")]),e._v(" "),a("li",[e._v("渲染引擎（Rendering engine）：处理HTML、CSS的解析与渲染")]),e._v(" "),a("li",[e._v("JavaScript解释器（JavaScript Interpreter）：解析和执行JavaScript代码")]),e._v(" "),a("li",[e._v("用户界面后端（UI Backend）：指浏览器的的图形库等")]),e._v(" "),a("li",[e._v("网络（Networking）：用于网络调用，比如HTTP请求")])]),e._v(" "),a("h3",{attrs:{id:"浏览器内核"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器内核","aria-hidden":"true"}},[e._v("#")]),e._v(" 浏览器内核")]),e._v(" "),a("p",[e._v("浏览器内核分为两部分：渲染引擎(layout engineer或Rendering Engine)和JS引擎")]),e._v(" "),a("ul",[a("li",[e._v("渲染引擎：负责取得网页的内容（HTML、XML、图像等等）、整理讯息（例如加入CSS等），以及计算网页的显示方式，然后会输出至显示器或打印机")]),e._v(" "),a("li",[e._v("JS引擎：负责解析和执行javascript来实现网页的动态效果\n浏览器的内核的不同对于网页的语法解释会有不同，所以渲染的效果也不相同。所有网页浏览器、电子邮件客户端以及其它需要编辑、显示网络内容的应用程序都需要内核，最开始渲染引擎和JS引擎并没有区分的很明确，后来JS引擎越来越独立，内核就倾向于只指渲染引擎")])]),e._v(" "),a("blockquote",[a("p",[e._v("常见的浏览器内核：Trident（IE）、Gecko（火狐）、Blink（Chrome、Opera）、Webkit（Safari）")])]),e._v(" "),a("h3",{attrs:{id:"页面加载流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#页面加载流程","aria-hidden":"true"}},[e._v("#")]),e._v(" 页面加载流程")]),e._v(" "),a("p",[e._v("在了解浏览器渲染过程之前，先来了解一下页面的加载流程。有助于更好理解后续渲染过程。从浏览器地址中从输入url地址到渲染出一个页面，会经过以下过程。\n1.浏览器输入的url地址经过DNS解析获得对应的IP\n2.向服务器发起TCP的3次握手\n3.建立链接后，浏览器向该IP地址发送http请求\n4.服务器接收到请求，返回一堆 HMTL 格式的字符串代码\n5.浏览器获得html代码，解析成DOM树\n6.获取CSS并构建CSSOM\n7.将DOM与CSSOM结合，创建渲染树\n8.找到所有内容都处于网页的哪个位置，布局渲染树\n9.最终绘制出页面")]),e._v(" "),a("h3",{attrs:{id:"浏览器渲染机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器渲染机制","aria-hidden":"true"}},[e._v("#")]),e._v(" 浏览器渲染机制")]),e._v(" "),a("p",[e._v("我们将要介绍的浏览器渲染过程主要步骤是5-9步，可以用下面的图来形象的展示\n"),a("img",{attrs:{src:"https://user-images.githubusercontent.com/21194931/57980148-b3478e80-7a59-11e9-8f15-09451ecb2906.png",alt:"image"}})]),e._v(" "),a("h4",{attrs:{id:"解析html成dom树"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解析html成dom树","aria-hidden":"true"}},[e._v("#")]),e._v(" 解析HTML成DOM树")]),e._v(" "),a("p",[e._v("这个解析过程大概可以分为几个步骤：\n"),a("img",{attrs:{src:"https://user-images.githubusercontent.com/21194931/57979715-4f6e9700-7a54-11e9-8726-24ddf54e29bc.png",alt:"image"}}),e._v("\n第一步：浏览器从磁盘或网络读取HTML的原始字节，也就是传输的0和1这样的字节数据，并根据文件的指定编码（例如 UTF-8）将它们转换成字符串。\n第二步：将字符串转换成Token,例如：“html”、“body”等。Token中会标识出当前Token是“开始标签”或是“结束标签”亦或是“文本”等信息\n第三步：在每个Token被生成后，会立刻消耗这个Token创建出节点对象，因此在构建DOM的过程中，不是等待所有的Token都生成后才去构建DOM,而是一边生成Token一边消耗来生成节点对象。")]),e._v(" "),a("blockquote",[a("p",[e._v("注意：带有结束标签标识的Token不会创建节点对象\n第四步：通过“开始标签”与“结束标签”来识别并关联节点之间的关系。当所有Token都生成并消耗完毕后，我们就得到了一颗完整的DOM树。")])]),e._v(" "),a("p",[e._v("但是现在有一个疑问，节点之间的关联关系是如何维护的呢？\n上面我们提到Token会标识是“开始标签”还是“结束标签”，以下图为例：“Hello”Token位于“title”开始标签与“title”结束标签之间，表明“Hello”Token是“title”Token的子节点。同理“title”Token是“head”Token的子节点。\n"),a("img",{attrs:{src:"https://user-images.githubusercontent.com/21194931/57933415-d8b88900-78ef-11e9-8627-b56bfd596db3.png",alt:"image"}})]),e._v(" "),a("h4",{attrs:{id:"构建cssom"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#构建cssom","aria-hidden":"true"}},[e._v("#")]),e._v(" 构建CSSOM")]),e._v(" "),a("p",[e._v("既然有了html解析，那css解析也是必不可少的，解析css构建CSSOM 的过程和构建DOM的过程非常的相似。当浏览器接收到一段CSS，浏览器首先要做的是识别出Token，然后构建节点并生成CSSOM\n"),a("img",{attrs:{src:"https://user-images.githubusercontent.com/21194931/57979728-6f9e5600-7a54-11e9-8295-2b025a8cb292.png",alt:"image"}}),e._v("\n节点中样式可以通过继承得到，也可以自己设置，因此在构建的过程中浏览器得递归 CSSOM 树，然后确定具体的元素到底是什么样式。为了CSSOM的完整性，也只有等构建完毕才能进入到下一个阶段，哪怕DOM已经构建完，它也得等CSSOM，然后才能进入下一个阶段。")]),e._v(" "),a("blockquote",[a("p",[e._v("CSS匹配HTML元素是一个相当复杂和有性能问题的事情。所以，DOM树要小，CSS尽量用id和class，千万不要过渡层叠下去\n所以，CSS的加载速度与构建CSSOM的速度将直接影响首屏渲染速度，因此在默认情况下CSS被视为阻塞渲染的资源")])]),e._v(" "),a("h4",{attrs:{id:"构建渲染树"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#构建渲染树","aria-hidden":"true"}},[e._v("#")]),e._v(" 构建渲染树")]),e._v(" "),a("p",[e._v("当我们生成DOM树和CSSOM树后，我们需要将这两颗树合并成渲染树，在构建渲染树的过程中浏览器需要做如下工作：")]),e._v(" "),a("ul",[a("li",[e._v("从 DOM 树的根节点开始遍历每个可见节点。")]),e._v(" "),a("li",[e._v("有些节点不可见（例如脚本Token、元Token等），因为它们不会体现在渲染输出中，所以会被忽略。")]),e._v(" "),a("li",[e._v("某些节点被CSS隐藏，因此在渲染树中也会被忽略。例如某些节点设置了display: none属性。")]),e._v(" "),a("li",[e._v("对于每个可见节点，为其找到适配的 CSSOM 规则并应用它们")])]),e._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/21194931/57979741-9d839a80-7a54-11e9-8028-aa0dbdb0cfbd.png",alt:"image"}})]),e._v(" "),a("h4",{attrs:{id:"渲染阻塞"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#渲染阻塞","aria-hidden":"true"}},[e._v("#")]),e._v(" 渲染阻塞")]),e._v(" "),a("p",[e._v("在渲染的过程中，遇到一个script标记时，就会停止渲染，去请求脚本文件并执行脚本文件，因为浏览器渲染和 JS 执行共用一个线程，而且这里必须是单线程操作，多线程会产生渲染 DOM 冲突。JavaScript的加载、解析与执行会严重阻塞DOM的构建。只有等到脚本文件执行完毕，才会去继续构建DOM。")]),e._v(" "),a("p",[e._v("js不单会阻塞DOM构建，还会导致CSSOM也阻塞DOM的构建，如果JavaScript脚本还操作了CSSOM，而正好这个CSSOM还没有下载和构建，浏览器甚至会延迟脚本执行和构建DOM，直至完成其CSSOM的下载和构建，然后再执行JavaScript，最后在继续构建DOM")]),e._v(" "),a("p",[e._v("因此script的位置很重要，在实际使用过程中遵循以下两个原则：")]),e._v(" "),a("ul",[a("li",[e._v("CSS 优先：引入顺序上，CSS 资源先于 JavaScript 资源。")]),e._v(" "),a("li",[e._v("JS置后：我们通常把JS代码放到页面底部，且JavaScript 应尽量少影响 DOM 的构建")])]),e._v(" "),a("h4",{attrs:{id:"布局与绘制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#布局与绘制","aria-hidden":"true"}},[e._v("#")]),e._v(" 布局与绘制")]),e._v(" "),a("p",[e._v("浏览器拿到渲染树后，就会从渲染树的根节点开始遍历，然后确定每个节点对象在页面上的确切大小与位置，通常这一行为也被称为“自动重排”。布局阶段的输出是一个盒子模型，它会精确地捕获每个元素在屏幕内的确切位置与大小，所有相对测量值都将转换为屏幕上的绝对像素。这一过程也可称为回流")]),e._v(" "),a("p",[e._v("布局完成后，浏览器会立即发出“Paint Setup”和“Paint”事件，将渲染树转换成屏幕上的像素。")]),e._v(" "),a("h3",{attrs:{id:"性能优化策略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#性能优化策略","aria-hidden":"true"}},[e._v("#")]),e._v(" 性能优化策略")]),e._v(" "),a("p",[e._v("在我们了解浏览器的渲染机制后，DOM 和 CSSOM 结构构建顺序，我们可以针对性能优化问题给出一些方案，提升页面性能。")]),e._v(" "),a("h4",{attrs:{id:"_1-回流-reflow-与重绘-repaint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-回流-reflow-与重绘-repaint","aria-hidden":"true"}},[e._v("#")]),e._v(" 1.回流(reflow)与重绘(repaint)")]),e._v(" "),a("p",[e._v("当元素的样式发生变化时，浏览器需要触发更新，重新绘制元素。这个过程中，有两种类型的操作，即重绘与回流。")]),e._v(" "),a("ul",[a("li",[e._v("重绘(repaint): 当元素样式的改变不影响布局时，浏览器将使用重绘对元素进行更新，此时由于只需要UI层面的重新像素绘制，因此损耗较少")]),e._v(" "),a("li",[e._v("回流(reflow): 当元素的尺寸、结构或触发某些属性时，浏览器会重新渲染页面，称为回流。此时，浏览器需要重新经过计算，计算后还需要重新页面布局，因此是较重的操作。会触发回流的操作:")]),e._v(" "),a("li",[e._v("添加或删除可见的DOM元素")]),e._v(" "),a("li",[e._v("元素的位置发生变化")]),e._v(" "),a("li",[e._v("元素的尺寸发生变化（包括外边距、内边框、边框大小、高度和宽度等）")]),e._v(" "),a("li",[e._v("内容发生变化，比如文本变化或图片被另一个不同尺寸的图片所替代。")]),e._v(" "),a("li",[e._v("页面一开始渲染的时候（这肯定避免不了）")]),e._v(" "),a("li",[e._v("浏览器的窗口尺寸变化（因为回流是根据视口的大小来计算元素的位置和大小的")])]),e._v(" "),a("blockquote",[a("p",[e._v("注意：回流一定会触发重绘，而重绘不一定会回流,重绘的开销较小，回流的代价较高")])]),e._v(" "),a("p",[e._v("因此为了减少性能优化，我们可以尽量避免回流或者重绘操作\ncss")]),e._v(" "),a("ul",[a("li",[e._v("避免使用table布局")]),e._v(" "),a("li",[e._v("将动画效果应用到position属性为absolute或fixed的元素上")])]),e._v(" "),a("p",[e._v("javascript")]),e._v(" "),a("ul",[a("li",[e._v("避免频繁操作样式，可汇总后统一 一次修改")]),e._v(" "),a("li",[e._v("尽量使用class进行样式修改")]),e._v(" "),a("li",[e._v("减少dom的增删次数，可使用 字符串 或者 documentFragment 一次性插入")]),e._v(" "),a("li",[e._v("极限优化时，修改样式可将其display: none后修改")]),e._v(" "),a("li",[e._v("避免多次触发上面提到的那些会触发回流的方法，可以的话尽量用 变量存住")])]),e._v(" "),a("h4",{attrs:{id:"async和defer的作用是什么？有什么区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#async和defer的作用是什么？有什么区别","aria-hidden":"true"}},[e._v("#")]),e._v(" async和defer的作用是什么？有什么区别?")]),e._v(" "),a("p",[e._v("defer 和 async 属性的区别：\n"),a("img",{attrs:{src:"https://user-images.githubusercontent.com/21194931/57979795-226eb400-7a55-11e9-8155-30d36f561634.png",alt:"image"}}),e._v('\n其中蓝色线代表JavaScript加载；红色线代表JavaScript执行；绿色线代表 HTML 解析\n1）情况1 <scriptsrc="script.js">'),e._v("\n没有 defer 或 async，浏览器会立即加载并执行指定的脚本，也就是说不等待后续载入的文档元素，读到就加载并执行。")]),e._v(" "),a("p",[e._v("2）情况2 "),a("script",{attrs:{async:"",src:"script.js"}}),e._v(" (异步下载)\nasync 属性表示异步执行引入的 JavaScript，与 defer 的区别在于，如果已经加载好，就会开始执行——无论此刻是 HTML 解析阶段还是 DOMContentLoaded 触发之后。需要注意的是，这种方式加载的 JavaScript 依然会阻塞 load 事件。换句话说，async-script 可能在 DOMContentLoaded 触发之前或之后执行，但一定在 load 触发之前执行。")]),e._v(" "),a("p",[e._v('3）情况3 <scriptdefersrc="script.js">'),e._v("(延迟执行)\ndefer 属性表示延迟执行引入的 JavaScript，即这段 JavaScript 加载时 HTML 并未停止解析，这两个过程是并行的。整个 document 解析完毕且 defer-script 也加载完成之后（这两件事情的顺序无关），会执行所有由 defer-script 加载的 JavaScript 代码，然后触发 DOMContentLoaded 事件。")]),e._v(" "),a("p",[e._v("defer 与相比普通 script，有两点区别：")]),e._v(" "),a("ul",[a("li",[e._v("载入 JavaScript 文件时不阻塞 HTML 的解析，执行阶段被放到 HTML 标签解析完成之后；")]),e._v(" "),a("li",[e._v("在加载多个JS脚本的时候，async是无顺序的加载，而defer是有顺序的加载")])]),e._v(" "),a("p",[e._v("js优化可以在script标签加上 defer属性 和 async属性用于在不阻塞页面文档解析的前提下，控制脚本的下载和执行")]),e._v(" "),a("blockquote",[a("p",[e._v("其他: CSS"),a("link"),e._v(" 标签的 rel属性 中的属性值设置为 preload 能够让你在你的HTML页面中可以指明哪些资源是在页面加载完成后即刻需要的,最优的配置加载顺序，提高渲染性能")])]),e._v(" "),a("h4",{attrs:{id:"首屏优化加载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#首屏优化加载","aria-hidden":"true"}},[e._v("#")]),e._v(" 首屏优化加载")]),e._v(" "),a("ul",[a("li",[e._v("减少首屏CGI的计算量：比如在微信8.8无现金日H5开发中，前端希望拿到用户的个人信息、消费记录、排名三类数据，如果只通过一个CGI来处理，那么后台响应时间肯定会变长；由于在H5的首屏中，只包含了用户信息，消费记录、排名都在第2屏和第3屏，此时其实可以利用异步的方式来拿消费记录、排名的数据。")]),e._v(" "),a("li",[e._v("页面瘦身：压缩HTML、CSS、JavaScript。")]),e._v(" "),a("li",[e._v("减少请求：CSS、JavaScript文件数尽量少，甚至当CSS、JS的代码不多时，可以考虑直接将代码内嵌到页面中。")]),e._v(" "),a("li",[e._v("多用缓存：缓存能大幅度降低页面非首次加载的时间。")]),e._v(" "),a("li",[e._v("少用table布局，浏览器在渲染table时会消耗较多资源，而且只有table里有一点变化，整个table都会重新渲染。")]),e._v(" "),a("li",[e._v("做预加载：部分H5页面首屏可能要下载较多的静态资源，比如图片，这时为了避免加载时出现“难看”的页面，用预加载（loading的方式）做一个过渡")])]),e._v(" "),a("h3",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结","aria-hidden":"true"}},[e._v("#")]),e._v(" 总结")]),e._v(" "),a("p",[e._v("我们已经将浏览器的渲染机制了解了一遍，不仅了解到一些性能优化方案，也可以得出结论：\n浏览器渲染的关键路径共分五个步骤：")]),e._v(" "),a("blockquote",[a("p",[e._v("构建DOM -> 构建CSSOM -> 构建渲染树 -> 布局 -> 绘制")])]),e._v(" "),a("p",[e._v("参考链接")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MzA5NzkwNDk3MQ==&mid=2650588806&idx=1&sn=408a54e7c8102fd6944c9a40b119015a&chksm=8891d6a2bfe65fb42f493fe9a4dab672dd7e440f31e753196cee0cfbc6696e4f8dd3a669e040&mpshare=1&srcid=1228ZrXsmbZKcgCSu7zTVDwy&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[e._v("关键渲染路径"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://mp.weixin.qq.com/s/XUgIBKDxAY5EqKdaBkIg4A",target:"_blank",rel:"noopener noreferrer"}},[e._v("你不知道的浏览器页面渲染机制"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://mp.weixin.qq.com/s/OLlmh9eCjng2Z-0kYwIB2Q",target:"_blank",rel:"noopener noreferrer"}},[e._v("前端开发者应该明白的浏览器工作原理"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.chengrang.com/how-browsers-work.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("浏览器工作原理分析与首屏加载"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.cnblogs.com/wjlog/p/5790627.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("一次完整的浏览器请求流程"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://segmentfault.com/a/1190000017329980",target:"_blank",rel:"noopener noreferrer"}},[e._v("你真的了解回流和重绘吗"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=v.exports}}]);