import React from "react";
import { connect } from "react-redux";

class List extends React.Component {
    constructor() {
        super()
    }
    render() {
        return <ul className="list-group">
            <li className="list-group-item">
                编号
                &nbsp;
                &nbsp;
                姓名:xxx
            </li>
        </ul>
    }
}
export default connect()(List);