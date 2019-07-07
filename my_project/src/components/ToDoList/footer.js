import React from "react";
import { connect } from "react-redux";
import action from "../../store/action";
class Footer extends React.Component {
    constructor() {
        super()
        this.showData = [
            { text: "全部", flag: "all" },
            { text: "已完成", flag: "complate" },
            { text: "未完成", flag: "uncomplate" },
        ]
    }
    render() {

        return <div className="panel-footer">
            <ul className="nav nav-pills" onClick={this.changeTask}>
                {
                    this.showData.map((item, index) => {
                        return <li key={index} className={item.flag === this.props.flag ? "presentation active" : "presentation"}>
                            <a href="javascript:;" flag={item.flag}>{item.text}</a>
                        </li>
                    })
                }
            </ul>
        </div>
    }

    changeTask = (ev) => {
        let target = ev.target,
            tagName = target.tagName.toLowerCase();
        if (tagName === "li") {
            target = target.children[0];
            tagName = target.tagName.toLowerCase();
        }

        if (tagName === "a") {
            let flag = "all",
                text = target.getAttribute("flag");
            this.props.toDoListDone(text)
        }

    }
}
export default connect(state => ({ ...state.ToDoListReducer }), action.ToDoListAction)(Footer)