import React from "react";
import { connect } from "react-redux";
import action from "../../store/actions";

class Create extends React.Component {
    constructor() {
        super()
    }
    render() {
        return <div>
            用户编号：<input type="text" ref="number" />
            <br /><br />
            用户姓名：<input type="text" ref="name" />
            <br /><br />
            <button onClick={this.submit} onKeyUp={(ev) => {
                if (ev.keyCode === 13)
                    this.submit()
            }}>增加用户</button>
        </div>
    }
    submit = () => {
        let { name, number } = this.refs,
            { create, history } = this.props;
        create({
            id: number.value,
            name: name.value
        })
        name.value = number.value = "";
        history.push("/custom/list");
    }
}
export default connect(state => ({ ...state.CustomReducer }), action.CustomAction)(Create);