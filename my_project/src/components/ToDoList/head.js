import React from "react";
import { connect } from "react-redux";
import action from "../../store/action";

class Head extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        let title = "任务列表",
            { data } = this.props,
            len = data.filter(item => (parseFloat(item["state"]) === 0)).length;
        console.log(len)
        return <div className="panel-heading">
            <h3 className="panel-title">
                {title}当前未完成的任务数[<span className="count">{len}</span>]
            </h3>
            <input type="text" className="form-control" placeholder="请输入你想做的事情" onKeyUp={this.keyUp} />
        </div>
    }
    keyUp = (ev) => {
        if (ev.keyCode === 13) {
            let value = ev.target.value.trim();
            ev.target.value = ""
            this.props.toDoListAdd({
                name: value,
                state: 1
            })
        }
    }
}

export default connect(state => ({ ...state.ToDoListReducer }), action.ToDoListAction)(Head)