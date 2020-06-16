(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{289:function(s,a,e){"use strict";e.r(a);var n=e(0),t=Object(n.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"图片实现变色效果的三种方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#图片实现变色效果的三种方式","aria-hidden":"true"}},[s._v("#")]),s._v(" 图片实现变色效果的三种方式")]),s._v(" "),e("p",[s._v("为一张彩色图片增加染色效果变成灰度图片或者为灰度模式的图片增加染色效果变成彩色图片的css实现方式，有基于滤镜，基于混合模式的实现方式。\n")]),s._v(" "),e("h3",{attrs:{id:"基于滤镜的实现方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基于滤镜的实现方式","aria-hidden":"true"}},[s._v("#")]),s._v(" 基于滤镜的实现方式")]),s._v(" "),e("p",[s._v("我们来为彩色图片添加一个灰色的染色效果，可以使用多个滤镜组合的方式来实现。\n首先使用的是sepia()，它会给图片增加一种深褐色的染色效果，值为100%则完全是深褐色，值为0%图像无变化，若值在0-100，则是效果的线性乘子。现在的图片是呈现深褐色。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("filter: sepia(100%);\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("我们还需要更高的主色调饱和度，接下来使用saturate() 滤镜来给每个像素提升饱和度，saturate的值0-100%分别表示完全不饱和与图片无变化，若超过100%则有更高的饱和度。我们将saturate的值设为200%，这两个滤镜的组合会让图片具有一种橙黄色的染色效果。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("filter: sepia(100%) saturate(200%);\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("但是此时还不能满足我们的效果，我们还需要使用另外一个滤镜hue-rotate() 滤镜，把每个像素的色相以指定的度数进行偏移。我们将值设置在160deg左右，即可实现一个灰色的染色效果，并且添加动画效果。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('<img src="test.jpg" alt="test" />\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("css实现：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("img {\n    transition: .5s filter;\n    filter: sepia(100%) saturate(200%) hue-rotate(160deg);\n}\nimg: hover {\n    filter: none;\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("p",[s._v("效果如下图所示：\n"),e("img",{attrs:{src:"https://user-images.githubusercontent.com/21194931/52910911-4ba66980-32d9-11e9-808f-2cd62e85fa32.jpg",alt:"1550395498882"}})]),s._v(" "),e("h3",{attrs:{id:"基于混合模式的实现方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基于混合模式的实现方式","aria-hidden":"true"}},[s._v("#")]),s._v(" 基于混合模式的实现方式")]),s._v(" "),e("p",[s._v("接下来我们来给图片添加红色的染色效果，我们需要用到的是luminosity混合模式,这种混合模式会保留上层元素的 HSL 亮度信息，并从它的下层吸取色相和饱和度信息。")]),s._v(" "),e("p",[s._v("要对一个元素设置混合模式，有两个属性可以派上用场:mix-blend- mode ，background-blend-mode 。\n第一种属性: mix-blend- mode可以为整个元素设置混合模式，使用该属性需要把图片包裹在一个容器中，并把容器的背景色设置为我们想要的主色调。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('<p>\n    <img src="test.jpg" alt="test" />\n</p>\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("css实现 ：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("p{\n    width: 400px;\n    height: 300px;\n    background: hsl(335, 100%, 50%);\n}\nimg {\n    width: 100%;\n    height: 100%;\n    mix-blend-mode: luminosity;\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])]),e("p",[s._v("第二种属性：background-blend-mode 可以为每层背景单独指定混合模式。使用该属性不用图片元素，而是用 div元素——把这个元素的第一层背景设置为要染色的图片，并把第二层的背景设置为我们想要的主色调。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('<div class="test-image">\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("css实现：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(".test-image {\n    width: 400px;\n    height: 300px;\n    background-image:url(test.jpg);\n    background-size: cover;\n    background-color: transparent;\n    background-blend-mode: luminosity;\n    transition: .5s background-color;\n}\n.test-image:hover {\n    background-color: hsl(335, 200%, 50%);\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br")])]),e("p",[s._v("最终效果如图所示：\n"),e("img",{attrs:{src:"https://user-images.githubusercontent.com/21194931/52910953-c66f8480-32d9-11e9-8038-122f30be9d21.jpg",alt:"1550395512153"}})]),s._v(" "),e("p",[s._v("不过，这两种方法都不够理想。它们的主要问题在于：\n第一种属性的实现不能实现动画效果\n第二种属性的实现，在语义上，这个元素并不是一张图片，因此并不会被读屏器之类的设备读出来。")])])}),[],!1,null,null,null);a.default=t.exports}}]);