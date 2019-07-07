import React from "react";
import { connect } from "react-redux";
import action from "../../store/action";

class Body extends React.Component {
    constructor() {
        super()
    }
    render() {
        let { data, flag } = this.props;
        data = data.filter(item => {
            let { state } = item;
            state = parseInt(state);
            if (flag === "complate") return state === 1;
            if (flag === "uncomplate") return state === 0;
            return true
        })

        return <div className="panel-body">
            {
                data.length === 0 ? (<span style={{ color: "red" }}>你还没有任何任务...</span>) : (<ul className="list-group">
                    {
                        data.map((item, index) => {
                            return <li key={index} className="list-group-item">
                                <input type="checkbox" onChange={() => { this.props.updateState(item.id, Number(!parseInt(item.state))) }} checked={parseInt(item.state)} />
                                <span className={item.state === 1 ? "complate" : ""}>{item.name}</span>
                                <a href="javascript:;" className="bnt bnt-danger" onClick={() => {
                                    let f = window.confirm("一旦删除无法复原，确定删除?");
                                    if (f)
                                        this.props.toDoDelete(item.id)
                                    return false;
                                }}>删</a>
                            </li>
                        })
                    }
                </ul>)
            }
        </div>
    }
}

export default connect(state => ({ ...state.ToDoListReducer }), action.ToDoListAction)(Body)