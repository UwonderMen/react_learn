import React from "react";
import VoteHead from "./VoteHead"
import VoteBody from "./VoteBody"
import VoteFooter from "./VoteFooter"
import PropTypes from "prop-types"

export default class Vote extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        let { title, store } = this.props;
        return <div className="panel panel-default">
            <VoteHead title={title} store={store}></VoteHead>
            <VoteBody store={store}></VoteBody>
            <VoteFooter store={store}></VoteFooter>
        </div >
    }
}
