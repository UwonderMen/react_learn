import React from 'react'

export default function SelfDialog(props) {
    let {children} = props;
    return <section className="panel panel-default col-md-6 col-offset-md-3" >
        <div className="panel-heading">
            <h3 className="panel-title">系统提示</h3>
        </div>
        <div className="panel-body">
            {
                children
            }
        </div>
        <div className="panel-footer">
            <span>this is a tail</span>
        </div>
    </section>
}