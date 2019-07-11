import React from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import { } from "antd";
import List from "./course/list";
import Info from "./course/info";
import "../static/css/course.less";

class Home extends React.Component {
    constructor(props, context, updater) {
        super(props, context, updater)
    }
    render() {
        return <div className="courseBox">
            <Switch>
                <Route path="/course" exact component={List}></Route>
                <Route path="/course/info" component={Info}></Route>
            </Switch>
        </div>
    }
}
export default Home;