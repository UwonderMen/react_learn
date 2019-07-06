import React from "react";
import action from "../../store/action";
import { connect } from "react-redux";

/** 
 * 相对对于传统的redux，我们做的步骤优化：
 *  1、导出的不在是我们创建的组件，而是基于react-redux导出的connect构造后的
 *      高阶组件
 *          导出的组件形式：
 *              export default connect([mapStateToProps],[mapDispatchToProps])(VoteBody)
 *            mapStateToProps和mapDispatchToProps是一个函数
*/


class VoteBody extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        let { n, m } = this.props,
            rate = (n / (n + m) * 100);
        rate = isNaN(rate) ? 0 + "%" : rate;
        return <div className="panel-body">
            <p>
                <span>支持人数：</span>
                <span>{n}</span>
            </p>
            <p>
                <span>反对人数：</span>
                <span>{m}</span>
            </p>
            <p>
                <span>支持率：</span>
                <span>{rate}</span>
            </p>
        </div>
    }
}

let mapStateToProps = state => {
    //state为redux的所有信息
    //返回值用于挂载到组件属性上的信息
    return {
        ...state.VoteReducer
    }
}
let mapDispatchToProps = dispatch => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(VoteBody)
