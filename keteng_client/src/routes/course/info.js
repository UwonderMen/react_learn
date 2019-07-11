import React from "react";
import { connect } from "react-redux";

class Info extends React.Component {
    constructor(props, context, updater) {
        super(props, context, updater)
    }
    render() {
        return <div>
            详情
        </div>
    }
}
export default connect()(Info);
