import React from "react";
import { connect } from "react-redux";

class Detail extends React.Component {
    constructor() {
        super()
    }
    render() {
        return <div>
            编号:1
            <br/>
            姓名:xxx
        </div>
    }
}
export default connect()(Detail);