import React from 'react'
import ReactDOM from 'react-dom'

class Model extends React.Component {
    constructor(props, context, updater) {
        super(props, context, updater)
    }

    render() {
        let { className, children, title } = this.props
        return <div>
            <h3 style={{ backgroundColor: className }}>{title}</h3>
            {
                children
            }
        </div>
    }
}
export default Model;