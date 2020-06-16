(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{374:function(s,a,t){"use strict";t.r(a);var n=t(0),r=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"爬楼梯"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#爬楼梯","aria-hidden":"true"}},[s._v("#")]),s._v(" 爬楼梯")]),s._v(" "),t("p",[s._v("难度：简单")]),s._v(" "),t("p",[s._v("描述："),t("br"),s._v("假设你正在爬楼梯。需要 "),t("em",[s._v("n")]),s._v(" 阶你才能到达楼顶。"),t("br"),s._v("每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？"),t("br"),s._v("**注意：**给定 "),t("em",[s._v("n")]),s._v(" 是一个正整数。")]),s._v(" "),t("p",[s._v("示例：")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[s._v("示例 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("：\n输入： "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n输出： "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n解释： 有两种方法可以爬到楼顶。\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" 阶 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" 阶\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" 阶\n示例 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("：\n输入： "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n输出： "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n解释： 有三种方法可以爬到楼顶。\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" 阶 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" 阶 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" 阶\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" 阶 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" 阶\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" 阶 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" 阶\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("p",[s._v("思路分析："),t("br"),s._v("利用动态规划"),t("br"),s._v("第 ii 阶可以由以下两种方法得到：")]),s._v(" "),t("p",[s._v("在第 (i-1)(i−1) 阶后向上爬一阶。")]),s._v(" "),t("p",[s._v("在第 (i-2)(i−2) 阶后向上爬 22 阶。")]),s._v(" "),t("p",[s._v("所以到达第 ii 阶的方法总数就是到第 (i-1)(i−1) 阶和第 (i-2)(i−2) 阶的方法数之和。")]),s._v(" "),t("p",[s._v("令 dp[i]dp[i] 表示能到达第 ii 阶的方法总数：")]),s._v(" "),t("p",[s._v("dp[i]=dp[i-1]+dp[i-2]")]),s._v(" "),t("p",[s._v("代码实现：")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("climbStairs")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("n")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("n "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" n\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" num1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" num2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" Num "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" i "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                numN "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" num1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" num2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                num1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" num2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                num2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" numN"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" numN"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);