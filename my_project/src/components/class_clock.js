import React, { Component } from "react";

class Clock extends Component {
    constructor() {
        super();
        this.state = {
            time: new Date().toLocaleString()
        }
    }
    //react生命周期之一：第一次组件渲染完成后出发(我们这里只需要
    //间隔1000ms改变一下this.state中的time数据就行，这样react会自动帮我们把组件中
    //的部分内容进行重新渲染)
    async componentDidMount() {

        // this.state.time = new Date().toLocaleString()
        await this.setState({
            time: new Date().toLocaleString()
        }, () => {
            console.log(3)
        })
        console.log(1)
    }
    render() {
        console.log(2)
        return <div>
            <h3>北京时间:</h3>
            <span>{this.state.time}</span>
        </div>
    }
}

export default Clock;