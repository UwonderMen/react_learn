import React from "react";
import { connect } from "react-redux";

class Tips extends React.Component {
    constructor(props,context,updater) {
        super(props,context,updater)
    }
    render() {
        return <div>未登录</div>
    }
}
export default connect()(Tips);