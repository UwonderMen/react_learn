import React from "react";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "./personal/login";
import info from "./personal/info";
import Reister from "./personal/register";
import Tips from "./personal/tips";
import { checkLogin } from "../api/person";

class Personal extends React.Component {
    constructor(props, context, updater) {
        super(props, context, updater)
    }
    render() {
        return <div>
            <Switch>
                <Route path="/person/info" render={() => {
                    //进入个人页面进行登录验证
                    if (this.state.isLogin === 0)
                        return <Info />
                    return <Tips />
                }}></Route>
                <Route path="/person/login" component={Login}></Route>
                <Route path="/person/register" component={Register}></Route>
                <Redirect from="/person" to="/person/info" />
            </Switch>
        </div>
    }
}
export default connect()(Personal);