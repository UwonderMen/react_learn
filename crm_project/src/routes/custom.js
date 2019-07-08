import React from "react";
import { connect } from "react-redux";
import { Route, Switch, Redirect ,NavLink} from "react-router-dom";
import List from "./custom/list";
import Detail from "./custom/detail";
import Create from "./custom/create";

class Custom extends React.Component {
    constructor() {
        super()
    }
    render() {
        return <div>
            <ul className="nav nav-pills nav-stacked col-md-2">
                <li className="presentation">
                    {/* <a href="javascript:;">客户列表</a> */}
                    <NavLink to="/custom/list" className="navbar-brand" >客户列表</NavLink>
                </li>
                <li className="presentation">
                    {/* <a href="javascript:;">增加列表</a> */}
                    <NavLink to="/custom/create" className="navbar-brand" >增加列表</NavLink>
                </li>
            </ul>
            <div className="col-md-10">
                <Switch>
                    <Route path="/custom/list"  component={List}></Route>
                    <Route path="/custom/detail"  component={Detail}></Route>
                    <Route path="/custom/create"  component={Create}></Route>
                    {/* <Route component={List}></Route> */}
                    {/* 上面的这种写法和下面的这种写法一致 */}
                    <Redirect from="/custom" to="/custom/list" />
                </Switch>
            </div>
        </div>
    }
}
export default connect()(Custom);        