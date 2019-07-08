import React from "react";
import { connect } from "react-redux";
import { NavLink, withRouter } from "react-router-dom";

class Nav extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div className="navbar navbar-default">
            {/* LOGO部分 */}
            <div className="container-fluid col-md-2">
                <a href="javascript:;" className="navbar-brand">CRM</a>
            </div>
            {/* 导航部分 */}
            <div className="collapse navbar-collapse col-md-9">
                <ul className="nav navbar-nav">
                    <li>
                        {/* <Link className="navbar-brand" to="/" >首页</Link> */}
                        <NavLink to="/" exact className="navbar-brand">首页</NavLink>
                    </li>
                    <li>
                        {/* <Link className="navbar-brand" to="/custom" >客户管理</Link> */}
                        <NavLink to="/custom" className="navbar-brand" >客户管理</NavLink>
                    </li>
                    <li>
                        {/* <Link className="navbar-brand" to="/plan" >计划管理</Link> */}
                        <NavLink to="/plan" className="navbar-brand">计划管理</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    }
}

export default withRouter(connect()(Nav));