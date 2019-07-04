import React from "react"
import PropTypes from "prop-types";

class CompositeComponent extends React.Component {
    constructor() {
        super()
        this.state = {
            click_num: 0
        }
    }

    render() {
        return <div className="panel panel-warning">
            <Head count={this.state.click_num} />
            <Body fn={this.change.bind(this)} />
        </div>
    }

    change() {
        this.setState({
            click_num: this.state.click_num + 1
        })
    }
}

class Body extends React.Component {
    static propTypes = {
        fn: PropTypes.func.isRequired
    }
    constructor() {
        super()
    }
    render() {
        return <div className="panel-body">
            <button className="btn bnt-default" onClick={this.props.fn}>点击</button>
        </div>
    }
}


class Head extends React.Component {
    static propTypes = {
        count: PropTypes.number.isRequired
    }
    constructor() {
        super()
    }
    render() {
        return <div className="panel-heading">
            <h3 className="panel-title">点击次数:{this.props.count}</h3>
        </div>
    }
}

export default CompositeComponent;