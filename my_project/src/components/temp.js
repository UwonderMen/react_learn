import React from "react";

class Temp extends React.Component {
    constructor(props, context, updater) {
        super(props, context, updater)
        this.state = {
            txt: "胖子你好"
        }
    }

    render() {
        let { txt } = this.state;
        return <div className="panel panel-title">
            <div className="panel-title" ref="hh">
                <h3>{txt}</h3>
            </div>
            <div className="panel-body">
                <input type="text"
                    className="form-control"
                    value={txt}
                    onChange={(ev) => {
                        let res = ev.target.value
                        this.setState({
                            txt: res
                        })
                    }} />
            </div>
            <div className="panel-footer">
                <p>
                    <button className="btn btn-warning">支持</button>
                    <button className="btn btn-default">反对</button>
                </p>
            </div>
        </div>
    }
}

export default Temp;