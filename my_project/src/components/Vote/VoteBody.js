import React from "react";

export default class VoteBody extends React.Component {
    constructor(props, context) {
        super(props, context);
        //getState()后边访问的状态属性是：合并reducer时使用的名字
        let { n, m } = this.props.store.getState().VoteReducer;
        this.state = {
            n, m
        };
    }

    componentDidMount() {
        this.props.store.subscribe(() => {
            let { n, m } = this.props.store.getState().VoteReducer;
            this.setState({
                n, m
            })
        })
    }

    render() {
        let { n, m } = this.state,
            rate = (n / (n + m) * 100).toFixed(2) + "%";
            rate = (n + m) === 0 ? 0.00 + "%" : rate;

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
