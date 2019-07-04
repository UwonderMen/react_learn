import React from "react"

class Test extends React.Component {
    static defaultProps = {

    }
    constructor() {
        super()
        console.log("constructor阶段")
        this.state = {
            a: 1
        }
    }
    componentWillMount() {
        console.log("第一次渲染之前介段componentWillMount")
        console.log("componentWillMount获取的元素DOM", this.refs.f)
        
        this.setState({
            a:this.state.a+1
        })
        console.log(this.state.a)
    }
    componentDidMount() {

        console.log("第一次渲染之后介段omponentDidMount")
        console.log("componentDidMount获取的元素DOM", this.refs.f)

        setInterval(() => {
            console.log("修改A之前")
            this.setState({
                a: this.state.a + 1
            })
            console.log("修改A之后")
        }, 6000)
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("触发是否允许更新组件shouldComponentUpdate")
        console.log(nextState.a)
        if (nextState.a < 3)
            return true
        return false

    }
    componentWillUpdate(nextProps, nextState) {
        console.log("更新之前", this.state.a, nextState.a)
        console.log("更新之前触发ccomponentWillUpdate")
    }
    componentDidUpdate() {
        console.log("更新之后触发的componentDidUpdate")
    }
    render() {
        console.log("render阶段")
        return <div>
            <span ref="f">测试组件渲染</span>
        </div>

    }

}

export default Test