#withRouter方法的作用
```
    WithRouter这个方法意思是把一个非路由管控的组件模拟称为路由管控的组件
```

#withRouter方法的使用
```
    如果使用了react-redux,将组件进行connect方法返回一个组件后，使用withRouter方法，在处理一下这个组件
        import React from "react";
        import { connect } from "react-redux";
        import { NavLink, Link, withRouter } from "react-router-dom";

        class Nav extends React.Component {
            constructor(props) {
                super(props)
                this.state = {
                    count: 0
                }
            }
            render() {
                console.log("adsaasdsa")
                return <div className="navbar navbar-default">
                    {/* LOGO部分 */}
                    <div className="container-fluid col-md-2">
                        <a href="javascript:;" className="navbar-brand">CRM</a>
                    </div>
                    {/* 导航部分 */}
                    <div className="collapse navbar-collapse col-md-9">
                        <ul className="nav navbar-nav" onClick={() => { this.setState({ count: this.state.count + 1 }) }}>
                            <li>
                                {/* <Link className="navbar-brand" to="/" >首页</Link> */}
                                <NavLink to="/" exact className="navbar-brand">首页</NavLink>
                            </li>
                            <li>
                                {/* <Link className="navbar-brand" to="/custom" >客户管理</Link> */}
                                <NavLink to="/custom" className="navbar-brand" >客户管理</NavLink>
                            </li>
                            <li>
                                {/* <Link className="navbar-brand" to="/plan" >计划管理</Link> */}
                                <NavLink to="/plan" className="navbar-brand">计划管理</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            }
        }
    export default withRouter(connect()(Nav));

    这段话的意思是：先把Nav基于connect函数处理一下，返回的是一个代理组件，然后把返回的代理组件受路由管控一下
```

#受路由管控组件的特点
```
    1、只有当前页面的hash地址和路由指定的地址匹配，才会把对应的组件渲染（withRouter方法没有路由匹配，都被模拟成受路由管控组件）
    2、路由匹配则渲染，路由不匹配则消亡。路由切换原理：凡是匹配的路由，都会把对应的组件内容重新添加到页面中，相反，不匹配的都会在页面中移除掉，下一次重新匹配上，组件需要重新渲染到页面上，每一次路由切换的时候(浏览器的hash地址改变)，都会从一级路由开始重新校验一遍
    3、所有的受路由管控的组件，都在组件的props上加了三个属性（这三个属性都是对象，上面有许多方法）：
        1、history属性：
            1、push方法：向history stack栈中追加一信息，达到切换到指定路由地址的目的。受路由管控的组件其实跳转路径使用的就是this.props.history.push("路径").
            2、go方法：跳转到指定的地址(这个方法支持一个参数，如果是0表示跳转到当前地址，如果是-1表示跳转到上一个地址，如果是-2表示跳转到上两个地址，如果是1表示跳转到后一个地址....)
            3、goback方法：等价于go(-1)回退到上一个地址。
            4、goforward方法：前进一个地址，相当于go(1)
        2、location（获取当前；浏览器hash路由渲染组件的一些信息，这个属性包含许多属性）：
            1、hash属性：表示当前浏览器的地址的hash值
            2、search属性：当前页面的问号传参值
            3、pathname属性：当前浏览器的地址的hash值
            4、state属性：基于react-router-dom库提供的路由中的Redirect组件或者Link组件或者NavLink组件中的to属性传递的state值，那么此时就可以通过location.state获得
        3、match（当前路由匹配的一些结果）：
            1、params属性：如果当前路由匹配的是地址路径参数，则这里可以获取传递参数的值
            2、isExact：路由匹配是否是精确匹配
```


#受路由管控组件的两种写法
```
    1、第一种：
        <Route path="/" component={不受路由管控组件}/>
        
        注意：但是这种需要有地址匹配才受路由管控
    
    2、第二种：
        使用withRouter路由受控函数处理一下非受路由管控组件
        export default withRouter(connect()(Nav))


    两种区别：
        第一种需要有地址匹配，第二种没有地址匹配都被模拟成受路由管控组件
```

