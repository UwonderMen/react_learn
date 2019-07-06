import React from "react";
import PropTypes from "prop-types";

export default class VoteFooter extends React.Component {
    static contextTypes = {
        fn: PropTypes.func
    }
    constructor(props, context) {
        super(props, context)
    }
    render() {
        return <div className="panel-footer">
            <button className="btn btn-default" onClick={() => { this.context.fn("support") }}>支持</button>
            <button className="btn btn-warning" onClick={() => { this.context.fn("against") }}>反对</button>
        </div>
    }
}
