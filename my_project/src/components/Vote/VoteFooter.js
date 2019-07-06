import React from "react";
import * as ActionTypes from "../../store/action-types";
import action from "../../store/action"
import { connect } from "react-redux";

class VoteFooter extends React.Component {

    constructor(props, context) {
        super(props, context)
    }
    render() {
        return <div className="panel-footer">
            <button className="btn btn-default" onClick={() => { this.props.support() }}>支持</button>
            <button className="btn btn-warning" onClick={() => { this.props.against() }}>反对</button>
        </div>
    }


}

let mapStateToProps = state => {
    //state为redux的所有信息
    //返回值用于挂载到组件属性上的信息
    return {

    }
}
let mapDispatchToProps = dispatch => {
    //dispatch是store实施上的一个方法，用于向reducer发送更新小心
    //mapDispatchToProps这个方法返回的是什么，就相当于把返回的这些挂载到了组件
    //属性上(一般我们挂载一些方法，这些方法完成了dispatch派发任务操作),如下：相当于把init函数挂载到了组件属性上
    //
    return {
        support() {
            dispatch(action.VoteAction.support())
        },
        against() {
            dispatch(action.VoteAction.against())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VoteFooter)

