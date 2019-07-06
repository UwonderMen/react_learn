import React from "react";
import VoteHead from "./VoteHead"
import VoteBody from "./VoteBody"
import VoteFooter from "./VoteFooter"
import PropTypes from "prop-types"

export default class Vote extends React.Component {
    static childContextTypes = {
        anum: PropTypes.number,
        bnum: PropTypes.number,
        fn: PropTypes.func
    }
    constructor(props) {
        super(props)
        this.state = {
            anum: props.count.anum,
            bnum: props.count.bnum
        }
    }

    getChildContext() {
        let { anum = 0, bnum = 0 } = this.state;
        let fn = this.updateData.bind(this)
        return {
            anum, bnum, fn
        }
    }

    render() {
        let { title, count } = this.props;
        return <div className="panel panel-default">
            <VoteHead title={title}></VoteHead>
            <VoteBody count={count}></VoteBody>
            <VoteFooter></VoteFooter>
        </div >
    }

    updateData(type) {
        if (type === "support") {
            this.setState({
                anum: this.state.anum + 1
            })
            return;
        }
        this.setState({
            bnum: this.state.bnum + 1
        })
    }


}
