import React from "react";
import { connect } from "react-redux";
import { Alert, Button } from "antd";
import { withRouter } from "react-router-dom";

class Tips extends React.Component {
    constructor(props, context, updater) {
        super(props, context, updater)
    }
    render() {
        return <div className="">
            <Alert
                message="未登录"
                description="未登录，请先登录!"
                type="warning"
                style={{
                    marginBottom: ".6rem"
                }}
            />
            <Button className="login" style={{
                marginBottom: ".09rem"
            }} type="danger" block onClick={() => {
                this.props.history.push("/person/login")
            }}>登录</Button>
            <Button className="register" type="primary" block onClick={() => {
                this.props.history.push("/person/register")
            }}>注册</Button>
        </div>
    }
}
export default withRouter(connect()(Tips));