import React from "react";
import { connect } from "react-redux";

class Login extends React.Component {
    constructor(props,context,updater) {
        super(props,context,updater)
    }
    render() {
        return <div>登录界面</div>
    }
}
export default connect()(Login);