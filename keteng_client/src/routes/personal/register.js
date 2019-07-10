import React from "react";
import { connect } from "react-redux";

class Regiter extends React.Component {
    constructor(props, context, updater) {
        super(props, context, updater)
    }
    render() {
        return <div>注册界面</div>
    }
}
export default connect()(Regiter);