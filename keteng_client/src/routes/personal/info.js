import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Button } from "antd";
import { loginOut } from "../../api/person";
import action from "../../store/action";

class Info extends React.Component {
    constructor(props, context, updater) {
        super(props, context, updater)
    }
    componentWillMount() {
        let { baseInfo, queryBaseInfo } = this.props;
        if (!baseInfo)
            queryBaseInfo()
    }
    render() {
        let { baseInfo: { name, email, phone } } = this.props;
        return <div className="personBaseInfo">
            {
                this.state.baseInfo === null ? "你查询的信息不存在" : (<div><p>
                    <span>用户名</span>
                    <span>{name}</span>
                </p>
                    <p>
                        <span>邮箱</span>
                        <span>{email}</span>
                    </p>
                    <p>
                        <span>电话号码</span>
                        <span>{phone}</span>
                    </p>
                    <p>
                        <Button shape="circle" loading />
                        <Button type="primary" onClick={async () => {
                            await loginOut();
                            this.props.history.push("/person")
                        }}>退出登录</Button>
                    </p>
                </div>
                )
            }
        </div>
    }
}
export default withRouter(connect(state => ({ ...state.personReducer }), action.personAction)(Info));