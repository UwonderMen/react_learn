import React from "react";
import PropTypes from "prop-types";

class Vote extends React.Component {
    static defaultProps = {
        title: "NBA总冠军是谁？",
    }
    static propTypes = {
        title: PropTypes.string.isRequired,
    }
    constructor(props, context, updater) {
        super(props, context, updater);
        this.state = {
            num: 0,
            disnum: 0,
        }
    }
    render() {
        let { title } = this.props,
            { disnum, num } = this.state,
            rate = (disnum + num) === 0 ? (0 + "%") : ((num / (disnum + num) * 100).toFixed(2) + "%");

        return <div className="panel panel-title">
            <div className="panel-title" ref="hh">
                <h3>{title}</h3>
            </div>
            <div className="panel-body">
                <p>
                    <span>支持人数：</span>
                    <span>{num}</span>
                </p>
                <p>
                    <span>反对人数：</span>
                    <span>{disnum}</span>
                </p>
                <p>
                    <span>支持率：</span>
                    <span>{rate}</span>
                </p>

            </div>
            <div className="panel-footer">
                <p>
                    <button className="btn btn-warning" onClick={this.support.bind(this)}>支持</button>
                    <button className="btn btn-default" onClick={this.disSupport.bind(this)}>反对</button>
                </p>
            </div>
        </div>
    }
    support() {
        this.setState({
            num: this.state.num + 1
        })
    }
    disSupport() {
        this.setState({
            disnum: this.state.disnum + 1
        })
        console.log(this.refs)
    }
}

export default Vote;