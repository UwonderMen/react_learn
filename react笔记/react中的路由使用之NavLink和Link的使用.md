
##react路由中的NavLink和Link的使用
```
    Link组件：是react-router-dom中提供的路由切换组件，基于他可以实现点击的时候路由切换

        Link的组件的属性包含：
            1、to(字符串类型的属性)：跳转到指定的路由地址
            2、to(对象类型的属性)：如果是对象类型的to属性，那么可以提供一些参数配置项：
                1、pathname：跳转的地址
                2、search：问号传参
                3、state：基于这种方式传递信息
            3、replace：是一个bool值，如果为false表示当前跳转的路由向history stack栈中追加一条路由信息。如果为true，表示替换history stack栈中当前的路由为点击Link组件后跳转的地址。

    NavLink组件：和Link组件类似，都是实现路由跳转，不同在于，当前页面地址的hash值与NavLink组件对应的hash值相吻合的时候，会默认加一个active样式类，让其有选中的样式。

        NavLink组件的属性包含：
             1、to(字符串类型的属性)：跳转到指定的路由地址
             2、replace：是一个bool值，如果为false表示当前跳转的路由向history stack栈中追加一条路由信息。如果为true，表示替换history stack栈中当前的路由为点击Link组件后跳转的地址。
             3、activeClassName：把默认的active样式类修改为这里设置的
             4、activeStyle：给匹配的NavLink设置行内样式。这个属性值是一个对象
             5、exact：控制NavLink中的to属性的值的匹配是宽松匹配
             6、strict：控制NavLink中的to属性的值的匹配是严格匹配
             7、isActive：匹配后执行对应的函数
    
    只要当前浏览器中的hash地址和NavLink中的to属性匹配了才会有选中样式或者才会加上选中类

    总结：
        NavLink组件比Link组件多了选中的样式


```


#关于react-router-dom使用注意
```
    react-router-dom提供的组件都必须要在HashRouter组件或者BrowerRouter组件内部，否则报错
```


#Link组件和Nav组件的原理
```
    基于Link组件渲染，渲染后的结果就是一个a标签，Link组件的to属性对应的信息最后变成了href中的内容

    例如：
        <Link className="navbar-brand" to="/plan" >计划管理</Link>

        编译成：
            <a href="#/plan" class="navbar-brand">计划管理</a>
```

#NavLink组件和Link组件最大的区别在于
```
    NavLink组件有一个自动匹配浏览器地址的hash值的过程，如果匹配加样式，或者进行函数调用（如果设置有isActive属性）

    而Link组件没有此效果，单纯表示路由的切换
```

#NavLink使用注意
```
    NavLink组件的to属性的hash值匹配也是类似于Route组件的匹配是一样的，比如"/link"路由匹配"/"路由，因此，在加样式active时，如果存在一个"/"路由，和其他包含这个"/"路由的hash值，那么一直都会给"/"路由的NavLink组件加active样式，其他不会加active样式，解决办法是，在"/"路由的NavLink组件上加一个exact属性，也就是进行精准匹配(宽松型的精准匹配)
```