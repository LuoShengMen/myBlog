---
title: React性能优化的8种方式了解一下？
---

react凭借virtual DOM和diff算法拥有高效的性能，除此之外也有很多其他的方法和技巧可以进一步提升react性能，在本文中我将列举出可有效提升react性能的几种方法，帮助我们改进react代码，提升性能。但是我们不必一定要在项目中使用这些方法，但是我们有必要知道如何使用这些方法。
<!-- more -->
<a name="3v105"></a>
### 使用React.Memo来缓存组件
提升应用程序性能的一种方法是实现memoization。Memoization是一种优化技术，主要通过存储昂贵的函数调用的结果，并在再次发生相同的输入时返回缓存的结果，以此来加速程序。<br />父组件的每次状态更新，都会导致子组件重新渲染，即使传入子组件的状态没有变化，为了减少重复渲染，我们可以使用React.memo来缓存组件，这样只有当传入组件的状态值发生变化时才会重新渲染。如果传入相同的值，则返回缓存的组件。示例如下：
```javascript
export default React.memo((props) => {
  return (
    <div>{props.value}</div>  
  )
});
```

<a name="VhOMi"></a>
### 使用useMemo缓存大量的计算
有时渲染是不可避免的，但如果您的组件是一个功能组件，重新渲染会导致每次都调用大型计算函数，这是非常消耗性能的，我们可以使用新的useMemo钩子来“记忆”这个计算函数的计算结果。这样只有传入的参数发生变化后，该计算函数才会重新调用计算新的结果。<br />通过这种方式，您可以使用从先前渲染计算的结果来挽救昂贵的计算耗时。总体目标是减少JavaScript在呈现组件期间必须执行的工作量，以便主线程被阻塞的时间更短。
```javascript
// 避免这样做
function Component(props) {
  const someProp = heavyCalculation(props.item);
  return <AnotherComponent someProp={someProp} /> 
}
  
// 只有 `props.item` 改变时someProp的值才会被重新计算
function Component(props) {
  const someProp = useMemo(() => heavyCalculation(props.item), [props.item]);
  return <AnotherComponent someProp={someProp} /> 
}
```


<a name="cMSku"></a>
### 使用React.PureComponent , shouldComponentUpdate
父组件状态的每次更新，都会导致子组件的重新渲染，即使是传入相同props。但是这里的重新渲染不是说会更新DOM,而是每次都会调用diif算法来判断是否需要更新DOM。这对于大型组件例如组件树来说是非常消耗性能的。<br />在这里我们就可以使用React.PureComponent , shouldComponentUpdate生命周期来确保只有当组件props状态改变时才会重新渲染。如下例子:
```javascript
export default function ParentComponent(props) {
  return (
    <div>
      <SomeComponent someProp={props.somePropValue}
    <div>
      <AnotherComponent someOtherProp={props.someOtherPropValue} />
    </div>
   </div>
 )
}

export default function SomeComponent(props) {
  return (
    <div>{props.someProp}</div>  
  )
}

// 只要props.somePropValue 发生变化，不论props.someOtherPropValue是否发生变化该组件都会发生变化
export default function AnotherComponent(props) {
  return (
    <div>{props.someOtherProp}</div>  
  )
}
```

我们可以使用React.PureComponent 或shouldComponentUpdate 进行如下优化：
```javascript
// 第一种优化
class AnotherComponent extends React.PureComponent {
  render() {
    return <div>{this.props.someOtherProp}</div>   
  }
}

//第二种优化
class AnotherComponent extends Component {
  shouldComponentUpdate(nextProps) {
    return this.props !== nextProps
  }
  render() {
    return <div>{this.props.someOtherProp}</div>   
  }
}
```

<br />PureComponent会进行浅比较来判断组件是否应该重新渲染，对于传入的基本类型props，只要值相同，浅比较就会认为相同，对于传入的引用类型props，浅比较只会认为传入的props是不是同一个引用，如果不是，哪怕这两个对象中的内容完全一样，也会被认为是不同的props。<br />需要注意的是在对于那些可以忽略渲染时间的组件或者是状态一直变化的组件则要谨慎使用PureComponent，因为进行浅比较也会花费时间，这种优化更适用于大型的展示组件上。大型组件也可以拆分成多个小组件，并使用memo来包裹小组件，也可以提升性能。

<a name="OKFUc"></a>
### 
<a name="XBrfJ"></a>
### 避免使用内联对象
使用内联对象时，react会在每次渲染时重新创建对此对象的引用，这会导致接收此对象的组件将其视为不同的对象,因此，该组件对于prop的浅层比较始终返回false,导致组件一直重新渲染。<br />许多人使用的内联样式的间接引用，就会使组件重新渲染，可能会导致性能问题。为了解决这个问题，我们可以保证该对象只初始化一次，指向相同引用。另外一种情况是传递一个对象，同样会在渲染时创建不同的引用，也有可能导致性能问题，我们可以利用ES6扩展运算符将传递的对象解构。这样组件接收到的便是基本类型的props，组件通过浅层比较发现接受的prop没有变化，则不会重新渲染。示例如下：
```javascript
// Don't do this!
function Component(props) {
  const aProp = { someProp: 'someValue' }
  return <AnotherComponent style={{ margin: 0 }} aProp={aProp} />  
}

// Do this instead :)
const styles = { margin: 0 };
function Component(props) {
  const aProp = { someProp: 'someValue' }
  return <AnotherComponent style={styles} {...aProp} />  
}
```

<a name="SEubD"></a>
### 避免使用匿名函数
虽然匿名函数是传递函数的好方法（特别是需要用另一个prop作为参数调用的函数），但它们在每次渲染上都有不同的引用。这类似于上面描述的内联对象。为了保持对作为prop传递给React组件的函数的相同引用，您可以将其声明为类方法（如果您使用的是基于类的组件）或使用useCallback钩子来帮助您保持相同的引用（如果您使用功能组件）。<br />当然，有时内联匿名函数是最简单的方法，实际上并不会导致应用程序出现性能问题。这可能是因为在一个非常“轻量级”的组件上使用它，或者因为父组件实际上必须在每次props更改时重新渲染其所有内容。因此不用关心该函数是否是不同的引用，因为无论如何，组件都会重新渲染。
```javascript
// 避免这样做
function Component(props) {
  return <AnotherComponent onChange={() => props.callback(props.id)} />  
}

// 优化方法一
function Component(props) {
  const handleChange = useCallback(() => props.callback(props.id), [props.id]);
  return <AnotherComponent onChange={handleChange} />  
}

// 优化方法二
class Component extends React.Component {
  handleChange = () => {
   this.props.callback(this.props.id) 
  }
  render() {
    return <AnotherComponent onChange={this.handleChange} />
  }
}
```


<a name="0K0XI"></a>
### 延迟加载不是立即需要的组件
延迟加载实际上不可见（或不是立即需要）的组件，React加载的组件越少，加载组件的速度就越快。因此，如果您的初始渲染感觉相当粗糙，则可以在初始安装完成后通过在需要时加载组件来减少加载的组件数量。同时，这将允许用户更快地加载您的平台/应用程序。最后，通过拆分初始渲染，您将JS工作负载拆分为较小的任务，这将为您的页面提供响应的时间。这可以使用新的React.Lazy和React.Suspense轻松完成。
```javascript
// 延迟加载不是立即需要的组件
const MUITooltip = React.lazy(() => import('@material-ui/core/Tooltip'));
function Tooltip({ children, title }) {
  return (
    <React.Suspense fallback={children}>
      <MUITooltip title={title}>
        {children}
      </MUITooltip>
    </React.Suspense>
  );
}

function Component(props) {
  return (
    <Tooltip title={props.title}>
      <AnotherComponent />
    </Tooltip>
  )
}
```


<a name="O4SlI"></a>
### 调整CSS而不是强制组件加载和卸载
渲染成本很高，尤其是在需要更改DOM时。每当你有某种手风琴或标签功能，例如想要一次只能看到一个项目时，你可能想要卸载不可见的组件，并在它变得可见时将其重新加载。如果加载/卸载的组件“很重”，则此操作可能非常消耗性能并可能导致延迟。在这些情况下，最好通过CSS隐藏它，同时将内容保存到DOM。<br />尽管这种方法并不是万能的，因为安装这些组件可能会导致问题（即组件与窗口上的无限分页竞争），但我们应该选择在不是这种情况下使用调整CSS的方法。另外一点，将不透明度调整为0对浏览器的成本消耗几乎为0（因为它不会导致重排），并且应尽可能优先于更该visibility 和 display。<br />有时在保持组件加载的同时通过CSS隐藏可能是有益的，而不是通过卸载来隐藏。对于具有显著的加载/卸载时序的重型组件而言，这是有效的性能优化手段。
```javascript
// 避免对大型的组件频繁对加载和卸载
function Component(props) {
  const [view, setView] = useState('view1');
  return view === 'view1' ? <SomeComponent /> : <AnotherComponent />  
}

// 使用该方式提升性能和速度
const visibleStyles = { opacity: 1 };
const hiddenStyles = { opacity: 0 };
function Component(props) {
  const [view, setView] = useState('view1');
  return (
    <React.Fragment>
      <SomeComponent style={view === 'view1' ? visibleStyles : hiddenStyles}>
      <AnotherComponent style={view !== 'view1' ? visibleStyles : hiddenStyles}>
    </React.Fragment>
  )
}
```


<a name="yvWKY"></a>
### 使用React.Fragment避免添加额外的DOM
有些情况下，我们需要在组件中返回多个元素，例如下面的元素，但是在react规定组件中必须有一个父元素。
```javascript
            <h1>Hello world!</h1>
            <h1>Hello there!</h1>
            <h1>Hello there again!</h1>
```

因此你可能会这样做,但是这样做的话即使一切正常，也会创建额外的不必要的div。这会导致整个应用程序内创建许多无用的元素：
```javascript
function Component() {
        return (
            <div>
                <h1>Hello world!</h1>
                <h1>Hello there!</h1>
                <h1>Hello there again!</h1>
            </div>
        )
}
```

实际上页面上的元素越多，加载所需的时间就越多。为了减少不必要的加载时间，我们可以使React.Fragment来避免创建不必要的元素。
```javascript
function Component() {
        return (
            <React.Fragment>
                <h1>Hello world!</h1>
                <h1>Hello there!</h1>
                <h1>Hello there again!</h1>
            </React.Fragment>
        )
}
```

<a name="b6Kgg"></a>
### 总结
我们文中列出的基本上是React内部提供的性能优化方法，这些方法可以帮助React更好地执行，并没有列出例如Immutable.js第三方工具库的优化方法。其实性能优化的方法有很多，但正如上面所说的，合适的方法也要在合适的场景下使用，过度的使用性能优化反而会得不偿失。

参考链接

- [https://itnext.io/6-tips-for-better-react-performance-4329d12c126b](https://itnext.io/6-tips-for-better-react-performance-4329d12c126b)
- [https://blog.logrocket.com/7-optimization-techniques-in-react/](https://blog.logrocket.com/7-optimization-techniques-in-react/)
