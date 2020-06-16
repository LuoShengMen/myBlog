(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{268:function(e,a,t){"use strict";t.r(a);var s=t(0),n=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"react的受控组件和非受控组件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#react的受控组件和非受控组件","aria-hidden":"true"}},[e._v("#")]),e._v(" react的受控组件和非受控组件")]),e._v(" "),t("p",[e._v("现在写这个主要是在项目中使用antd的组件input的过程中遇到了问题，才发现之前没有很理解react的受控组件和非受控组件。\n至于我的问题是什么呢！\n"),e._v("\n我要实现的功能：")]),e._v(" "),t("blockquote",[t("p",[e._v("1、支持传入默认值；")])]),e._v(" "),t("blockquote",[t("p",[e._v("2、可控：组件外部修改props可改变input组件的真实值及显示值；")])]),e._v(" "),t("blockquote",[t("p",[e._v("3、非可控：输入框中输入值，可同时改变input组件的真实值及显示值")])]),e._v(" "),t("p",[e._v("遇到的问题：")]),e._v(" "),t("p",[e._v("就是在使用过程中在input框的defalutValue传递props.value赋默认值后，这导致了即使后续prop.value值改变，defaulteValue也不会改变，原因是什么呢！原来React的form表单组件中的defaultValue一经传递值后，后续改变defaultValue都将不起作用，被忽略了。\n此处：如果使用value代替defaultValue,会发现输入框的值无法改变。")]),e._v(" "),t("p",[e._v("怎么解决这个问题！这就涉及到react的受控组件和非受控组件了。具体来说这是一种react非受控组件，其状态是在input的react内部控制，不受调用者控制。可以使用受控组件来实现。")]),e._v(" "),t("h2",{attrs:{id:"受控组件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#受控组件","aria-hidden":"true"}},[e._v("#")]),e._v(" 受控组件")]),e._v(" "),t("p",[e._v("就形式上来说，受控组件就是为某个form表单组件添加value属性；非受控组件就是没有添加value属性的组件；，受控组件的形式如下形式：")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('<input type="text" value="Hello!" />;\n\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])]),t("p",[e._v("这种写法带来一个问题：渲染后的input组件的用户交互，用户输入的任何值将不起作用，input输入框中的值始终为Hello!。\n为了控制该组件，就需要能能够控制input组件的值，需要借助其内部的状态state，即组件内部要维护一个状态state以便配合input组件的onChange和setState方法来完成对组件的控制。")]),e._v(" "),t("p",[e._v("解决方法：可以将props的value赋给组件内部状态的state:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("componentWillReceiveProps(nextProps) {\n      this.setState({\n      value: nextProps.value\n      });\n  }\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br")])]),t("p",[e._v("onchange函数写法：")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("onchange = (e) => {\n  this.setState({\n    value: e.target.value,\n  });\n};\n\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br")])]),t("p",[e._v("Input组件写法")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("<Input value={this.state.value} onChange={this.onChange}/>\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("这样就实现了我的功能。")]),e._v(" "),t("h2",{attrs:{id:"非受控组件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#非受控组件","aria-hidden":"true"}},[e._v("#")]),e._v(" 非受控组件")]),e._v(" "),t("p",[e._v("表现形式上，react中没有添加value属性的表单组件元素就是非受控组件。表现形式如下：")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('<input type="text" />\n\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])]),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结","aria-hidden":"true"}},[e._v("#")]),e._v(" 总结")]),e._v(" "),t("p",[e._v("鉴于受控组件与非受控组件的特点，二者应用的地方也有所不同，主要表现在：")]),e._v(" "),t("blockquote",[t("p",[e._v("受控元素，一般用在需要动态设置其初始值的情况；例如某些form表单信息编辑时，input表单元素需要初始显示服务器返回的某个值然后进行编辑。")])]),e._v(" "),t("blockquote",[t("p",[e._v("非受控元素， 一般用于无任何动态初始值信息的情况； 例如form表单创建信息时，input表单元素都没有初始值，需要用户输入的情况")])])])}),[],!1,null,null,null);a.default=n.exports}}]);