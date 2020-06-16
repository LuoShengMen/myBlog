(window.webpackJsonp=window.webpackJsonp||[]).push([[185],{210:function(t,s,a){"use strict";a.r(s);var n=a(0),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"版本控制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#版本控制","aria-hidden":"true"}},[t._v("#")]),t._v(" 版本控制")]),t._v(" "),a("p",[a("a",{attrs:{name:"fd700506"}})]),t._v(" "),a("h3",{attrs:{id:"代码提交错误常用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码提交错误常用命令","aria-hidden":"true"}},[t._v("#")]),t._v(" 代码提交错误常用命令")]),t._v(" "),a("ol",[a("li",[t._v("最后一次代码提交时有拼写错误"),a("br"),t._v("\n经过几个小时的编码后，拼写错误很容易带到你的提交消息里面。 幸运的是，有一个简单的解决方案。")])]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("git commit "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("amend\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("这会打开编辑器，并允许你更改最后一次提交消息。 没有人知道你把“addded”单词多加了一个字母“d”的拼写错误。")]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("忘了在最后一次提交中添加文件"),a("br"),t._v("\n另一个常见的Git陷阱是过早提交。 你少添加了一个文件，忘了保存它，或者需要对最后一次提交做一个小改动才有意义。 --amend 再次成为你的朋友。")])]),t._v(" "),a("p",[t._v("添加错过的文件然后运行该命令。")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("git add missed"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("file"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("txt\ngit commit "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("amend\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("此时，可以修改提交消息，也可以只保存它以使其保持不变。")]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("在代码库中添加了一个不想要的文件"),a("br"),t._v("\n但如果你的做法的正好相反呢？如果添加了不想提交的文件怎么办？一个环境文件，一个构建目录，或者是一张图片不小心保存到错误的目录？这都是可以解决的。"),a("br"),t._v("\n如果你所做的只是对文件进行了stage操作放入了暂存区，还没有commit本地代码仓库，那么只需重新设置暂存区的文件即可：")])]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("git reset "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("assets"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("img"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("misty"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("and"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("pepper"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("jpg\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("如果已经提交了更改，那么需要先运行一个额外的步骤：")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("git reset "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("soft "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HEAD")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\ngit reset "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("assets"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("img"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("misty"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("and"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("pepper"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("jpg\nrm "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("assets"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("img"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("misty"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("and"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("pepper"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("jpg\ngit commit\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("这将撤销提交，删除图片文件，然后在其位置添加一个新的提交。")]),t._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[t._v("提交了所有的修改到 master 分支"),a("br"),t._v("\n你正在开发一个新特性，在匆忙之中，忘记为它打开一个新的分支。已经提交了一堆文件，现在它们都位于主分支（master）上。幸运的是，GitLab可以防止你直接推到master 主分支上。因此，我们可以使用以下三个命令将所有这些更改回滚到一个新分支：")])]),t._v(" "),a("p",[t._v("Note"),a("br"),t._v("确保首先commit或stash更改，否则所有更改都将丢失！")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("git branch future"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("brunch\ngit reset "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HEAD")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("hard\ngit checkout future"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("brunch\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("这会创建一个新分支，然后将主分支回滚到进行更改之前的位置，然后最终检出新分支，并保留所有先前的更改。")]),t._v(" "),a("ol",{attrs:{start:"5"}},[a("li",[t._v("分支名称出现了拼写错误"),a("br"),t._v("\n对错误分支进行重命名的方式与用mv命令重命名文件的方式类似：将它移动到一个新的位置，并使用正确的名称。例如把future-brunch分支名称更改为feature-branch。")])]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("git branch "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("m future"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("brunch feature"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("branch\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("如果已经push了这个分支到远程代码仓库，那么还需要一些额外的步骤。需要从远程代码仓库删除旧的分支，将新分支 push 上去：")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("git push origin "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("delete")]),t._v(" future"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("brunch\ngit push origin feature"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("branch\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("ol",{attrs:{start:"6"}},[a("li",[t._v("重复操作"),a("br"),t._v("\n这个命令适用于一切都出错的地方。 当从Stack Overflow复制粘贴一个太多的解决方案时，"),a("br"),t._v("\n代码仓库处于比你一开始时更糟糕的状态。"),a("br"),t._v("\ngit reflog向你显示所有的事情列表。然后，它允许你使用Git的神奇时间旅行技巧，回退到过去的任何时间点。这里应该指出，这是最后的手段，不应该轻易使用。要得到这个列表，输入：")])]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("git reflog\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("我们采取的每一步，我们所做的每一个动作，Git都有记录。 在我们的项目上运行该命令得到以下列表：")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ff8691")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HEAD")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" feature"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("branch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HEAD")]),t._v("@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Branch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" renamed refs"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("heads"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("future"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("brunch to refs"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("heads"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("feature"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("branch\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ff8691")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HEAD")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" feature"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("branch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HEAD")]),t._v("@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" checkout"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" moving "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" master to future"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("brunch\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("b7e508")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("master"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HEAD")]),t._v("@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" reset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" moving to "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HEAD")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ff8691")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HEAD")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" feature"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("branch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HEAD")]),t._v("@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" commit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Adds the client logo\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("b7e508")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("master"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HEAD")]),t._v("@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" reset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" moving to "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HEAD")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("37")]),t._v("a632d "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HEAD")]),t._v("@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" commit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Adds the client logo to the project\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("b7e508")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("master"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HEAD")]),t._v("@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" reset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" moving to "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HEAD")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("b7e508")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("master"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HEAD")]),t._v("@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("commit")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("amend"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Added contributing info to the site\ndfa27a2 "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HEAD")]),t._v("@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" reset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" moving to "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HEAD")]),t._v("\ndfa27a2 "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HEAD")]),t._v("@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("commit")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("amend"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Added contributing info to the site\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("700")]),t._v("d0b5 "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HEAD")]),t._v("@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" commit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Addded contributing info to the site\nefba795 "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HEAD")]),t._v("@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("commit")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("initial"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Initial commit\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br")])]),a("p",[t._v("记下最左边的列，因为这是索引。 如果要返回历史记录中的任何一点，请运行以下命令，将{index}替换为该引用，例如dfa27a2。")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("git reset "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HEAD")]),t._v("@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("虽然没用过git,但是还是忍不住保存了下来。如果自己以后的过程遇到了这方面的知识，还是可以翻出来看看的")]),t._v(" "),a("p",[a("a",{attrs:{name:"8568df51"}})]),t._v(" "),a("h3",{attrs:{id:"gitflow概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gitflow概念","aria-hidden":"true"}},[t._v("#")]),t._v(" gitflow概念")]),t._v(" "),a("p",[t._v("Git Flow是构建在Git之上的一个组织软件开发活动的模型，是在Git之上构建的一项软件开发最佳实践。Git Flow是一套使用Git进行源代码管理时的一套行为规范和简化部分Git操作的工具。Git Flow重点解决的是由于源代码在开发过程中的各种冲突导致开发活动混乱的问题。因此，Git flow可以很好的于各种现有开发模型相结合使用")]),t._v(" "),a("p",[t._v("Gitflow图解："),a("br"),a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2019/png/218767/1566963219948-21489028-fbbf-45e6-bbdd-33ac9d6a6f1d.png#align=left&display=inline&height=584&originHeight=584&originWidth=562&size=0&status=done&width=562",alt:""}})]),t._v(" "),a("blockquote",[a("p",[t._v("参考链接："),a("a",{attrs:{href:"https://www.jianshu.com/p/84dd2da33c82",target:"_blank",rel:"noopener noreferrer"}},[t._v("代码管理——学会Git和Gitflow工作流"),a("OutboundLink")],1)])]),t._v(" "),a("p",[a("a",{attrs:{name:"Q4Qzp"}})]),t._v(" "),a("h3",{attrs:{id:"git-rebase-vs-git-merge"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-rebase-vs-git-merge","aria-hidden":"true"}},[t._v("#")]),t._v(" git rebase vs git merge")]),t._v(" "),a("p",[t._v("git merge")]),t._v(" "),a("ul",[a("li",[t._v("记录下合并动作 很多时候这种合并动作是垃圾信息")]),t._v(" "),a("li",[t._v("不会修改原 commit ID")]),t._v(" "),a("li",[t._v("冲突只解决一次")]),t._v(" "),a("li",[t._v("分支看着不大整洁，但是能看出合并的先后顺序")]),t._v(" "),a("li",[t._v("记录了真实的 commit 情况，包括每个分支的详情")])]),t._v(" "),a("p",[t._v("git rebase")]),t._v(" "),a("ul",[a("li",[t._v("改变当前分支 branch out 的位置")]),t._v(" "),a("li",[t._v("得到更简洁的项目历史")]),t._v(" "),a("li",[t._v("每个 commit 都需要解决冲突")]),t._v(" "),a("li",[t._v("修改所有 commit ID")])]),t._v(" "),a("p",[a("a",{attrs:{name:"e6QmK"}})]),t._v(" "),a("h3",{attrs:{id:"git-stash"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-stash","aria-hidden":"true"}},[t._v("#")]),t._v(" git stash")]),t._v(" "),a("p",[a("br"),t._v("git stash用于想要保存当前的修改,但是想回到之前最后一次提交的干净的工作仓库时进行的操作.git stash将本地的修改保存起来,并且将当前代码切换到HEAD提交上.")]),t._v(" "),a("p",[t._v("通过git stash存储的修改列表,可以通过git stash list查看.git stash show用于校验,git stash apply用于重新存储.直接执行git stash等同于git stash save.")]),t._v(" "),a("p",[a("strong",[t._v("开发到一半,同步远端代码")])]),t._v(" "),a("p",[t._v("当你的开发进行到一半,但是代码还不想进行提交 ,然后需要同步去关联远端代码时.如果你本地的代码和远端代码没有冲突时,可以直接通过git pull解决.但是如果可能发生冲突怎么办.直接git pull会拒绝覆盖当前的修改."),a("br"),t._v("遇到这种情况,需要先保存本地的代码,进行git pull,然后再pop出本地代码")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("git stash\ngit pull\ngit stash pop\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[a("strong",[t._v("工作流被打断,需要先做别的需求")])]),t._v(" "),a("p",[t._v('当开发进行到一半,老板过来跟你说"线上有个bug,你现在给我改好,不然扣你鸡腿".当然,你可以开一个新的分支,把当前代码提交过去,回头再merge,具体代码如下')]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("正确姿势\n# "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" hack hack hack "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n git stash        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//保存开发到一半的代码")]),t._v("\n edit emergency fix\n git commit "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Fix in a hurry"')]),t._v("\n git stash pop   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//将代码追加到最新的提交之后")]),t._v("\n# "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("continue")]),t._v(" hacking "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("p",[a("strong",[t._v("提交特定文件")])]),t._v(" "),a("p",[t._v("如果对多个文件做了修改,但是只想提交几个文件,或者想先暂时保存几个修改,测试其他文件的执行结果.可以通过git stash save --keep-index来进行.")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("# "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" hack hack hack "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n git add "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("patch foo            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//只将第一部分加入管理the index")]),t._v("\n git stash save "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("keep"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("index   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//将其余部分保存起来")]),t._v("\n edit"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("build"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("test first part\n git commit "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'First part'")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//提交全部的git管理中的代码")]),t._v("\n git stash pop                  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//继续进行存储代码的工作")]),t._v("\n# "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" repeat above five steps until one commit remains "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n edit"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("build"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("test remaining parts\n git commit foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Remaining parts'")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("p",[a("strong",[t._v("恢复被错误clear/drop的存储")])]),t._v(" "),a("p",[t._v("如果因为失误对存储仓库进行了clear或者drop操作,在一般机制下是不能恢复的.但是可以通过以下指令来获取仍在仓库中的,但是已经不可获取的存储列表")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("git fsck "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("unreachable "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\ngrep commit "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" cut "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("d\\  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("f3 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\nxargs git log "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("merges "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("no"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("walk "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("grep"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("WIP")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("**git push -u **"),a("br"),t._v("**绑定默认提交的远程版本库，加了参数-u后，以后即可直接用git push 代替git push origin master")])])}),[],!1,null,null,null);s.default=r.exports}}]);