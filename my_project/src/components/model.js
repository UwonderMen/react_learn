import React from 'react'
import ReactDOM from 'react-dom'

class Model extends React.Component {
    static defaultProps = {
        title: "adadasdas",
        red: {
            backgroundColor: "green"
        }
    }
    constructor(props, context, updater) {
        super(props, context, updater)
    }

    fn = () => {
        console.log(123)
    }
    A = 1;
    render() {
        let { red, title } = this.props
        this.fn()
        console.log(this.A)
        return <div>
            <h3 style={red}>{title}</h3>
        </div>
    }
}
export default Model;