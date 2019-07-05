import React from "react";
import PorpTypes from "prop-types";

export default class VoteBody extends React.Component {
    static contextTypes = {
        anum: PorpTypes.number,
        bnum: PorpTypes.number
    }
    constructor(props, context) {
        super(props, context)
    }
    render() {
        return <div className="panel-body">
            <p>
                <span>支持人数：</span>
                <span>{this.context.anum}</span>
            </p>
            <p>
                <span>反对人数：</span>
                <span>{this.context.bnum}</span>
            </p>
            <p>
                <span>支持率：</span>
                <span>{(this.context.anum / (this.context.anum + this.context.bnum) * 100).toFixed(2)}</span>
            </p>
        </div>
    }
}
