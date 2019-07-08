import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from "./store";
import Nav from "./component/nav";
// import App from "./routes/App";
import "bootstrap/dist/css/bootstrap.css";
import "./static/css/common.css";
import Home from "./routes/home";
import Custom from "./routes/custom";
import Plan from "./routes/plan";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";


ReactDOM.render(<Provider store={store}>
    <HashRouter>
        <div>
            {/* Nav组件是头部区域 */}
            <Nav />
            {/* App组件里边是基于HashRouter展示不同的页面 */}
            <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/custom" component={Custom}></Route>
                <Route path="/plan" component={Plan}></Route>
            </Switch>
        </div>
    </HashRouter>
</Provider>, document.getElementById('root'));