import React from "react";
import { connect } from "react-redux";

class MyCourse extends React.Component {
    constructor(props, context, updater) {
        super(props, context, updater)
    }
    render() {
        return <div>
            我的课程
        </div>
    }
}
export default connect()(MyCourse);