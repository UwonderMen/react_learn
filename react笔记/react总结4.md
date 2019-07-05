#react中的生命周期函数
```
    调取组件生命周期函数步骤：
        1、调取组件先执行初始化组件方法：constructor()
        2、第一次渲染之前调用生命周期函数:componentWillMount()
        3、渲染组件:render()
        4、渲染完成组件调用声明周期函数：componentDIdMount()

    修改状态触发组件更新(组件重新渲染:内部属性改变或者状态变化)
        1、shouldComponentUpdate函数
            是否允许组件更新，返回false表示不允许，不再继续执行其他操作。返回true表示允许，执行后续生命周期函数。
        2、componentWillUpdate函数
            更新之前执行的生命周期函数，和shouldComponentUpdate一样，方法中通过this.state获取的还是更新前的状态信息，这两个方法都有两个参数：
                第一个参数：nextProps最新的属性
                第二个参数：nextState最新的状态信息
        3、componentDidUpdate函数
            更新之后触发的生命周期函数
    
    属性变化触发组件更新(组件重新渲染:内部属性改变或者状态变化)
        1、componentWillRecibeProps函数
            接受最新属性之前触发的函数，这函数如果使用this.props获取的属性是修改之前的，因此这个函数也提供了两个参数：
                第一个参数：nextProps最新的属性
                第二个参数：nextState最新的状态信息
        *后续走的也是状态更改的生命周期步骤*
    
    组件销毁
        1、componentWillUnmount函数
            组件销毁之前触发的生命周期函数
```

#组件的属性是只读的，因为在内部已经使用Object.freezon来冻结了属性，不能修改

#组件的状态是可读写的：状态的改变会引发组件的重新更新，更新状态方法：this.setState()

#组件实力上可以存放一些信息：这些信息只是为了方便在组件内任一方法中获取和使用

#实例上挂在refs就是用来操作dom元素的

#实例上挂在context是用来实现组件间的信息传递
