import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Icon } from "antd";
import { Link } from "react-router-dom";

/**
 * transition来实现
 */
import { Transition } from 'react-transition-group';

const duration = 600,
    defaultStyle = {
        transition: `opacity ${duration}ms ease-in-out`,
        opacity: 0,
    },
    transitionStyles = {
        entering: { opacity: 1 },
        entered: { opacity: 1 },
        exiting: { opacity: 0 },
        exited: { opacity: 0 },
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
                            ...transitionStyles[state]
                        }}>
                            <li><Link to="/">全部课程</Link></li>
                            <li><Link to="/vue">vuejs</Link></li>
                            <li><Link to="/react">reactjs</Link></li>
                            <li><Link to="/node">nodejs</Link></li>
                        </ul>
                    )}
                </Transition>
            </div>
        </div>
    }
}
export default withRouter(connect()(NavTop));