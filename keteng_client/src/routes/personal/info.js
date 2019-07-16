import React from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { Button, Alert } from "antd";
import { loginOut } from "../../api/person";
import action from "../../store/action";
import Tips from "../personal/tips";

class Info extends React.Component {
    constructor(props, context, updater) {
        super(props, context, updater)
    }
    componentWillMount() {
        let { baseInfo, queryBaseInfo } = this.props;
        if (!baseInfo) {
            console.log("是否是死循环?")
            queryBaseInfo()
        }
    }
    render() {
        let { baseInfo } = this.props;
        return baseInfo ? (<div className="personBaseInfo">
            <div><p>
                <span>用户名</span>
                <span>{baseInfo.username ? baseInfo.username : "无"}</span>
            </p>
                <p>
                    <span>邮箱</span>
                    <span>{baseInfo.email ? baseInfo.email : "无"}</span>
                </p>
                <p>
                    <span>电话号码</span>
                    <span>{baseInfo.phone ? baseInfo.phone : "无"}</span>
                </p>
                <p>
                    <Button type="primary" onClick={async () => {
                        let res = await loginOut();
                        if (res.code === 0) {
                            this.props.queryBaseInfo();
                            this.props.history.push("/person")
                        }
                    }}>退出登录</Button>
                </p>
            </div>
        </div>) : <Tips />
    }
}
export default withRouter(connect(state => ({ ...state.personReducer }), action.personAction)(Info));