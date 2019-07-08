import React from "react";
import { connect } from "react-redux";

class Home extends React.Component {
    constructor() {
        super()
    }
    render() {
        return <div>Home</div>
    }
}
export default connect()(Home);