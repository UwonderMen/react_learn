import React from "react";
import { connect } from "react-redux";
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "./home";
import Custom from "./custom";
import Plan from "./plan";

class App extends React.Component {
    constructor() {
        super()
    }
    render() {
        return <HashRouter>
            <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/custom" exact component={Custom}></Route>
                <Route path="/plan" exact component={Plan}></Route>
                <Route path="/error" exact render={() => {
                    return <div>
                        <h3>错误啦 </h3>
                        <div>您所访问的页面不存在</div>
                    </div>
                }}></Route>
                <Redirect to="/error" />
            </Switch>
        </HashRouter>
    }
}
export default connect()(App);