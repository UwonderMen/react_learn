import React from 'react';
import ReactDOM from 'react-dom';

// 导入上下文管控的store的组件
import { Provider } from "react-redux";

//导入容器
import store from "./store";

//导入路由
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";

//导入汉化的antd
import { LocaleProvider } from "antd";
import zh_CN from "antd/lib/locale-provider/zh_CN";

// 导入样式表
import "./static/css/reset.min.css";
import "./static/css/common.less";

//导入页面级组件
import Home from "./routes/home";
import MyCourse from "./routes/mycourse";
import Personal from "./routes/personal";

// 导入公共组件
import NavTop from "./component/navTop";
import NavBottom from "./component/navBottom";

ReactDOM.render(<Provider store={store}>
    <HashRouter>
        <LocaleProvider locale={zh_CN}>
            <div>
                <NavTop></NavTop>
                <div className="container">
                    <Switch>
                        <Route path="/course" exact component={Home}></Route>
                        <Route path="/mycourse" component={MyCourse}></Route>
                        <Route path="/person" component={Personal}></Route>
                        <Redirect from="/" to="/course" />
                    </Switch>
                </div>
                <NavBottom></NavBottom>
            </div>
        </LocaleProvider>
    </HashRouter>
</Provider>, document.getElementById('root'));
