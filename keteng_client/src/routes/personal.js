import React from "react";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "./personal/login";
import Info from "./personal/info";
import Register from "./personal/register";
import Tips from "./personal/tips";
import { checkLogin } from "../api/person";
import "../static/css/person.less";

class Personal extends React.Component {
    constructor(props, context, updater) {
        super(props, context, updater)
        this.state = {
            isLogin: true
        }
    }
    // async componentWillMount() {
    //     let result = await checkLogin(),
    //         isLogin = result.code === 0 ? true : false;
    //     // isLogin = true;
    //     this.setState({ isLogin });
    // }

    //注意：避免在componentWillUpdate或者componentDidUpdate钩子
    //函数修改状态值，因为避免死循环

    async componentWillReceiveProps() {
        let result = await checkLogin(),
            isLogin = parseInt(result.code) === 0 ? true : false;
        // isLogin = true;
        this.setState({ isLogin });
    }

    render() {
        return <div>
            <Switch>
                <Route path="/person/info" render={() => {
                    //进入个人页面进行登录验证
                    if (this.state.isLogin == 0)
                        return <Tips />
                    return <Info />

                }}></Route>
                <Route path="/person/login" component={Login}></Route>
                <Route path="/person/register" component={Register}></Route>
                <Redirect from="/person" to="/person/info" />
            </Switch>
        </div>
    }
}
export default connect()(Personal);