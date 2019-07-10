import React from "react";
import { connect } from "react-redux";
import { withRouter, NavLink } from "react-router-dom";
import { Icon } from "antd"

class NavBottom extends React.Component {
    constructor(props, context, updater) {
        super(props, context, updater)
    }
    render() {
        return <footer className="footerNavBox">
            <NavLink to="/course" exact>
                <Icon type="home" />
                <span>首页</span>
            </NavLink>
            <NavLink to="/mycourse">
                <Icon type="appstore" />
                <span>课程中心</span>
            </NavLink>
            <NavLink to="/person">
                <Icon type="user" />
                <span>个人中心</span>
            </NavLink>
        </footer>
    }
}
export default withRouter(connect()(NavBottom));
