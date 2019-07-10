import React from "react";
import { connect } from "react-redux";

class Home extends React.Component {
    constructor(props, context, updater) {
        super(props, context, updater)
    }
    render() {
        return <div>
            home
        </div>
    }
}
export default connect()(Home);