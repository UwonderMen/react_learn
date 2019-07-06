import React from "react";
import * as ActionTypes from "../../store/action-types";
import action from "../../store/action"

export default class VoteFooter extends React.Component {

    constructor(props, context) {
        super(props, context)
    }
    render() {
        return <div className="panel-footer">
            <button className="btn btn-default" onClick={() => { this.props.store.dispatch(action.VoteAction.support()) }}>支持</button>
            <button className="btn btn-warning" onClick={() => { this.props.store.dispatch(action.VoteAction.against()) }}>反对</button>
        </div>
    }
}
