import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Icon } from "antd";
import { Link } from "react-router-dom";
import action from "../store/action";

/**
 * transition来实现
 */
import { Transition } from 'react-transition-group';

const duration = 200,
    defaultStyle = {
        transition: `opacity ${duration}ms ease-in-out`,
        opacity: 0,
    },
    transitionStyles = {
        entering: { opacity: 0, },
        entered: { opacity: 1, },
        exiting: { opacity: 1, },
        exited: { opacity: 0, },
    };

class NavTop extends React.Component {
    constructor(props, context, updater) {
        super(props, context, updater)
        this.state = {
            in: false
        }
    }
    render() {
        /** 
         *  首页导航
        */
        return <div className="headerNavBox">
            <div className="homeBox">
                <div className="baseBox clearfix">
                    <h1 className="logo">
                        在线课堂
                    </h1>
                    <Icon className="icon" type="bars" style={{
                        fontSize: ".6rem"
                    }} onClick={() => {
                        this.setState({
                            in: !this.state.in
                        })
                    }} />
                </div>
                <Transition in={this.state.in} timeout={duration}>
                    {state => (
                        <ul className="filterBox" style={{
                            ...defaultStyle,
                            ...transitionStyles[state],
                            display: this.state.in ? "block" : "none"
                        }} onClick={this.handleClick}>
                            <li data-type="all">全部课程</li>
                            <li data-type="vue">vuejs</li>
                            <li data-type="react">reactjs</li>
                            <li data-type="nodejs">nodejs</li>
                        </ul>
                    )}
                </Transition>
            </div>
        </div>
    }

    handleClick = (ev) => {
        let target = ev.target,
            tarTag = target.tagName,
            type = target.getAttribute("data-type");
        if (tarTag.toLowerCase() === "li") {
            this.props.queryList({
                page: 1,
                type: type,
                flag: "replace"
            })
            this.setState({
                in: !this.state.in
            })
        }
    }
}
export default withRouter(connect(null, action.courseAction)(NavTop));