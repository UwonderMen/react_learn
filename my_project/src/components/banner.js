import React from "react";
import PropTypes from "prop-types";
import "../static/css/banner.css"

export default class Banner extends React.Component {
    static propTypes = {
        data: PropTypes.array,
        interval: PropTypes.number,
        step: PropTypes.number,
        speed: PropTypes.number
    }
    static defaultProps = {
        data: [],
        interval: 3000,
        step: 1,
        speed: 300
    }
    constructor(props) {
        super(props)
        this.state = {
            step: props.step,
            speed: props.speed,
        }
    }

    componentWillMount() {
        let { data } = this.props
        let cloneData = data.slice(0);
        cloneData.push(data[0])
        cloneData.unshift(data[data.length - 1]);
        this.cloneData = cloneData;
    }

    componentDidMount() {
        //把定时器挂在到组件实例上。后期结束轮播好清理
        this.autoTimer = setInterval(this.autoMove, this.props.interval)
    }

    componentWillUpdate(nextProps, nextState) {
        //在即将更新的生命周期中进行轮播图的边界判断
        //边界判断：
        //如果最新修改的step已经大于了this.cloneData的step
        //那么说明已经到末尾了，不能再加了。我们需要让其置为
        //step为1的位置
        if (nextState.step > this.cloneData.length - 1) {
            this.setState({
                step: 1,
                speed: 0
            })
        }
    }
    componentDidUpdate() {
        //只有是从克隆的第一张立即切换到真是第一张后，我们才做如下处理：
        //让其从当前第一张运动到第二张
        let { step, speed } = this.state;
        if (step === 1 && speed === 0) {
            //这里为什么要设置定时器延迟，请看*轮播图笔记*
            setTimeout(() => {
                this.setState({
                    step: step + 1,
                    speed: this.props.speed
                })
            }, 0)
        }
    }

    render() {
        let { data } = this.props;
        if (data.length === 0) return "";
        let { step, speed } = this.state;
        let wrapper_style = {
            width: this.cloneDatalength * 720 + "px",
            left: -step * 720 + "px",
            transition: `left ${speed}ms linear 0ms`
        };
        return <div className="container">
            <ul className="wrapper" style={wrapper_style}>
                {
                    this.cloneData.map((item, index) => {
                        return <li key={index}>
                            <img src={item.pic} alt={item.title} />
                        </li>
                    })
                }
            </ul>
            <ul className="focus">
                {
                    data.map((item, index) => {
                        let tempIndex = this.state.step - 1;
                        if (this.state.step === 0) tempIndex = this.cloneData.length - 1;
                        if (this.state.step === this.cloneData.length - 1) tempIndex = 0;

                        return <li key={index} className={(index === tempIndex) ? "active" : ""}></li>
                    })
                }
            </ul>
            <a href="javascript:;" className="arrow arrowLeft"></a>
            <a href="javascript:;" className="arrow arrowRight"></a>
        </div>
    }

    autoMove = () => {
        /*
            function:实现自动轮播,
            实现轮播原理：
                通过修改状态step来重新渲染视图实现轮播
         */
        this.setState({
            step: this.state.step + 1
        })
    }
}
