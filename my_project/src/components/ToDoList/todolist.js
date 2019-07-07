import React from "react";
import Head from "./head";
import Footer from "./footer";
import Body from "./body";
import { connect } from "react-redux";
import action from "../../store/action";

class ToDoList extends React.Component {
    constructor() {
        super()
    }
    render() {
        return <div className="panel panel-default">
            <Head></Head>
            <Body></Body>
            <Footer></Footer>
        </div>
    }
}

export default connect(state => ({ ...state.ToDoListReducer }), action.ToDoListAction)(ToDoList);