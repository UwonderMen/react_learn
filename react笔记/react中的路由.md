#react实现路由切换依赖第三方库react-router-dom(在react4.0以后都用得这个库，在react4.0以前使用的react-router)
```
   react使用react路由的使用步骤：
    1、安装第三方库：
        yarn add  react-router-dom
    2、



    react-router-dom学习网站：
        https://reacttraining.com/react-router/
    

    注意：
        关于react中的路由版本介绍：
            在3.0版本之前使用的路由叫react-router
            在4.0版本之后使用的路由叫react-router-dom

            其实react-router和react-router-dom是同一个东西，只不过不同版本下叫的名字不同

```

#react-router-dom中的两种路由切换思想
```
    1、BrowserRouter
        它是基于h5中history API(即pushState、replaceState、popState等api)来保持UI和URL的同步，真是项目中的应用的不多，一般只有当前项目是基于服务端渲染的，我们才是用BrowserRouter

        这种路由形式：
            http://www.demo.com/
            http://www.demo.com/login
            http://www.demo.com/user/1

    2、HashRouter
        真实项目中（前后端分离的项目：客户端渲染），我们经常使用的是哈希路由，它依据相同的页面地址，不同的hash值来规划当前页面中的那些组件呈现渲染，它基于原生js构造的一套类似于history API的
        机制，每一次路由切换都是基于history stack完成的

        这种路由形式：
            1、http://www.demo.com/#/login
            2、http://www.demo.com/#/user/1

```

#HashRouter的基本使用
```
    1、导入HashRouter从react-router-dom库中
        import { HashRouter ,Route} from "react-router-dom";

        注意：还需要导入Route，这个Route组件表示渲染不同的组件
    2、使用
        import { HashRouter, Route } from "react-router-dom";
        import A from "./components/router_test/a";
        import B from "./components/router_test/b";
        import C from "./components/router_test/c";
        let root = document.body.querySelector("#root");
        ReactDOM.render(<HashRouter>
        <Route path="/a" component={A}></Route>
        <Route path="/b" component={B}></Route>
        <Route path="/c" component={C}></Route>
        </HashRouter>, root);

        使用注意：
            1、HashRouter是一个组件，必须把整个项目使用HashRouter组件包裹起来
            2、当前项目如果使用HashRouter，则默认会在页面上的地址栏中加上"#/"，也就是hash默认值是一个斜杠，我们一般让其显示首页组件信息内容
            3、HashRouter组件中只允许出现一个子元素，但是这是在以前的版本中，现在的版本都支持多个子元素
            4、HashRouter机制中，我们需要根据hash地址的不同展示不同的内容，此时我们需要react-router-dom库中跟我们提供的另一个组件，即Route组件，这个的使用需要导入。
                Route组件中的属性：
                    1、path：匹配浏览器地址hash后边的值(地址)
                    2、component:一旦浏览器地址的hash值与Route组件中的定义的hash值相同，则渲染component属性指定的组件，否则指定组件不渲染。
                    3、exact：Route组件中的path路径的hash值与浏览器的hash值进行严格匹配，exact是个bool类型，默认是true（多一个斜杠是可以的）
                    4、render：当浏览器地址的hash值与Route组件的path属性匹配上了，会把render属性中的方法执行。Route组件的render属性表示渲染这个render属性值中返回的一个jsx。应用：一般这个render属性值的方法做权限校验
                        <Route path="/" render={() => <div>HOME</div>}></Route>
                        <Route path="/d" render={() =>{
                            let flag = localStorage.getItem("flag");
                            if(flag&&flag==="safe")
                            return <C/>
                            return "没有flag"
                        }} />
                    5、strict：Route组件中的path路径的hash值与浏览器的hash值进行严格匹配，也叫全匹配，多一个斜杠都不行，比exact属性匹配性宽松
            
```

#关于Route中的path属性的匹配规则
```
    1、path里边的hash值与浏览器地址中的hash值的匹配不是严格匹配的。
        比如：
            一个路径是：http://localhost:3000/#/a/b
            他能匹配下面两个路由：
                <Route path="/" render={() => <div>HOME</div>}></Route>
                <Route path="/a" component={A}></Route>
                 <Route path="/a/b" component={B}></Route>

        但是，他又不匹配：
            一个路径是：http://localhost:3000/#/a/b
            他能匹配下面第一个路由：
                <Route path="/" render={() => <div>HOME</div>}></Route>
                <Route path="/a2" component={A}></Route>
                <Route path="/a/b" component={B}></Route>
```
#react-router-dom库中的Switch组件的使用
```
    前提：
        默认情况下，浏览器的hash路径改变会和Route组件中的path路径做校验(哪怕之前已经校验成功)

    
    Switch组件可以解决：
        浏览器的hash路径改变会和Route组件中的path路径做校验，默认Route的属性只要不是严格(strict)、较宽松(exact)都会匹配上且渲染出来，但是，有时候我们向只渲染第一个匹配的，那么只能用Switch组件

    
    Switch组件作用：只要校验成功一次，那么不在向后做校验，也就不会向后匹配hash值

    Switch组件的应用：一般Switch组件结合Route组件的exact属性和Redirect组件来使用。
    

    举例：
        浏览器路径：http://localhost:3000/#/d
        <Switch>
            <Route path="/" exact render={() => <div>HOME</div>}></Route>
            <Route path="/d" render={() => {
            let flag = localStorage.getItem("flag");
            if (flag && flag === "safe")
                return <C />
            return "没有flag"
            }} />
        </Switch>
        结果：
            只渲染C组件
```

#react-router-dom库中的Redirect组件使用
```
    前提：
        有些时候，用户访问的地址不存在匹配的，此时我们需要将其跳转到404页面，那么，Redirect组件的作用就来了，改变浏览器的hash地址
    
    当然，没有找到指定路径有两种处理方式：
        1、直接通过Route组件不写path属性，表示匹配左右路径，在Route组件的render属性中，直接返回一个404的jsx元素。
        2、直接通过Route组件不写path属性，再基于Redirect组件的属性实现浏览器hash地址的改变，进而达到路由的跳转

    例子：
        <Switch>
            <Route path="/" exact render={() => <div>HOME</div>}></Route>
            <Route path="/b" exact render={B}></Route>
            <Route render={() => {
            return localStorage.getItem("flag") ? (<C />) : (<Redirect to="/" />)
            }} />
        </Switch>
    
```

#react-router-dom库中的Redirect组件中的to属性详解
```
    Redirect组件中的to属性有两种类型：
        1、字符串类型string：
            to=path：表示重定向到path这个路径下
        2、对象类型（里边包含几个属性）
            pathname属性：重定向的地址
            search属性：重定向的地址后边加的问号后边的传参（作用：真实项目中，我们有时候会根据是否存在问号参数值统计是正常进入首页还是非正常跳转过来的，也可能根据问号传参的值做不通的事）
            state属性：给指定组件传递一些信息
    
    举例：
        输入地址：
            http://localhost:3000/#/abc
        输出地址：
            http://localhost:3000/#/?name=123
          <Switch>
            <Route path="/" exact render={() => <div>HOME</div>}></Route>
            <Route path="/b" exact render={B}></Route>
            <Route render={() => {
            return localStorage.getItem("flag") ? (<C />) : (<Redirect to={{pathname:"/",search:"name=123"}} />)
            }} />
        </Switch>

    注意：
        这两种写法是一样的：
            第一种：
                <Route render={() => {
                return localStorage.getItem("flag") ? (<C />) : (<Redirect to={{pathname:"/",search:"name=123"}} />)
                }} />
            第二种：
                 <Route render={() => {
                return localStorage.getItem("flag") ? (<C />) : (<Redirect to="/?name=123"}}/>)
``` 

#react-router-dom库中的Redirect组件中的其他属性
```
    1、push属性：如果设置了这个属性，当前跳转的地址会向history stack栈中加入一条记录
    2、from属性：设定当前来源的页面地址
        <Redirect from="/c" to="/b>
        表示：如果当前请求的hash地址是"/c"，我们让其重定向到"/b",类似于http状态码301
```