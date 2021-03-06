---
title: react16新特性
---

# react16新特性

## render的新返回类型(片段（fragments）与字符串（strings）)
现在组件的 render 方法能够返回由元素组成的数组。和其他数组一样，为了避免对key的警告，需要为每个元素添加一个key值：
<!-- more -->
```
render() {
  // 无需再将列表项包裹在一个额外的父元素中啦!
  return [
    // 不要忘了添加key :)
    <li key="A">First item</li>,
    <li key="B">Second item</li>,
    <li key="C">Third item</li>,
  ];
}
```
将来，我们可能会给JSX增加一种片段语法，使其不再需要添加key。render 方法也同时支持返回字符串啦：
```
render() {
  return 'Look ma, no spans!';
}
```

## 更棒的错误处理机制

之前，在渲染期间的运行报错可能会让React处于一个分裂的状态：生成隐秘的错误信息同时要求恢复刷新页面。为了解决这个问题，React 16使用了一种更为弹性化的错误处理策略。默认地，如果某个错误在一个组件渲染或生命周期方法内抛出，那么整个组件树将会从根部被卸载。这样就能防止无用的数据显示出来。然而，该种方法的用户体验并不理想。这时我们就需要用到 error boundary（暂且译成错误边界），而不是每当报错时卸载整个应用。错误边界是一种特殊的组件，它能抓取子树内的错误，并在其位置处显示一个回退的UI。可以把错误边界理解成像try-catch一样的语句，只不过它是用于React组件的。

## Portals
Portals提供了一种较好的方法，把子节点渲染到某个DOM节点中，该节点存在于父组件DOM层次结构之外。

```
render() {
  // React*不会*创建一个新的div，它将把子节点渲染到`domNode`内。
  // 不管`domNode`在DOM中的位置如何，它都是有效的DOM节点。
  return ReactDOM.createPortal(
    this.props.children,
    domNode,
  );
}
```
## 支持自定义DOM属性

现在，React能够把无法识别的HTML和SVG属性传递给DOM，而不是忽略他们（详见React官方博文——DOM Attributes in React 16）。这样做能有额外的好处：允许我们摆脱大多数React的属性白名单，从而减少文件大小。

## 减少文件大小

尽管新增了上述功能，但实际上，React 16反而比15.6.1版本体积更小！
1.react包的大小从20.7kb下降到5.3kb（gzip压缩后大小从6.9kb下降到2.2kb）。
2.react-dom包的大小从141kb下降到103.7kb（gzip压缩后大小从42.9kb下降到103.7kb）。
3.react+react-dom包总大小从161.7kb下降到109kb（gzip压缩后大小从49.8kb下降到34.8kb）。
这和前一版本相比，大小减少了32%（gzip压缩处理后的大小减少了30%）。

## 更好的服务器端渲染

React 16完全重写了服务器的渲染方式，变得更加快速高效。它同时还支持流媒体，这样你就能够更快捷地向客户端发送数据。另外，多亏有了新的打包策略来编译 process.env 检查，你不必再为了取得更好的服务器渲染效果而打包React了。小组的核心成员 Sasha Aickin 写了一篇很赞的文章来描述React 16在服务器端的渲染优化。 Sasha ：React16的服务器渲染速度比React15快约3倍。“当与带有 process.env 编译的React15相比时，React16在Node4下大约有2.4倍的优化提升，在Node6下大约有3倍的优化表现，在最新的Node8.4下最多能达到3.8倍的提升。如果在不编译的情况下，对于最新版本的Node，React16在服务器端渲染上有巨大提升。另外，React 16能更好地将HTML在服务器端渲染，一旦它传到客户端就进行“注水”（原文是hydrating ，这里可以理解成把单纯的数据加工成具有样式的较为美观的页面）。从服务器得到的结果不再需要通过初始渲染来进行准确的匹配，而是尽可能多地重复使用已存在的DOM。所以再也不需要校验了！一般来说，我们不建议在客户端和服务器上渲染不同的内容，但在某些情况下是可以这么做的（如，时间戳）。

## 全新的Context API

1.React.createContext 用于传递 初始值（可选择 使用 bitmask 的一个奇妙的选择性退出函数），返回一个包含 provider 和 consumer 的对象
2.provide 函数使用 higher，并可以接收任何值
3.consume 函数在 provider 之后任何地方使用，并传递一个返回 JSX 的函数（这有点像 render prop 组件，但 consume 不是组件）。
解决的问题:
1.现有Context API的实现存在一定问题：比如当父组件的shouldComponentUpdate性能优化，可能会导致消费了context数据的子组件不更新。
2.降低复杂度：类似redux全家桶这样的解决方案，给项目引入了一定的复杂度，尤其是对方案了解不足的同学，遇到问题可能一筹莫展。新Context API的引入，一定程度上可以减少不少项目对redux全家桶的依赖。

