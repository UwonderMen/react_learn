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
                    path：匹配hash后边的值(地址)
                    component:一旦浏览器的hash与Route组件中的hash值相同，则渲染component属性指定的组件
            
```