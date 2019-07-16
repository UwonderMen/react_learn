import React from "react";
import { connect } from "react-redux";
import { queryCourseInfo, addCart, removeCart } from "../../api/course";
import { Button } from "antd";
import action from "../../store/action/index";
import QS from "qs";

class Info extends React.Component {
    constructor(props, context, updater) {
        super(props, context, updater);
        this.state = {
            data: {},
            isAddCart: -1 //存储是否已经加入购物车
        }
    }

    async componentWillMount() {
        let result = await queryCourseInfo(this.props.location.search);
        let courseid = QS.parse(this.props.location.search.substr(1))["courseid"];
        if (result.code === 0) {
            let { pay, unpay } = this.props.shopCart,
                isshop = -1;
            if (unpay.find(item => parseInt(item.courseid) === parseInt(courseid)))
                isshop = 0;
            if (pay.find(item => parseInt(item.courseid) === parseInt(courseid)))
                isshop = 1;
            this.setState({
                data: result.data,
                isAddCart: isshop
            })
        }
    }

    render() {
        let { name, desc, price, video, id } = this.state.data,
            { isAddCart } = this.state;
        return <div className="courseBaseInfo">
            <video src={video} controls preload="none"></video>
            <div className="content">
                <p>
                    <span>{name}</span>
                </p>
                <p>
                    <span>{desc}</span>
                </p>
                <p>
                    <span>{price}</span>
                </p>
                <p>
                    {
                        isAddCart != 1 ? (<Button type={isAddCart === -1 ? "danger" : "primary"} onClick={() => { this.handleAddCart(id) }}>{isAddCart === -1 ? "加入购物车" : "从购物车移除"}</Button>) : null
                    }
                </p>
            </div>
        </div>
    }
    handleAddCart = async (id) => {
        if (this.state.isAddCart === -1) {
            let result = await addCart({
                courseid: id
            })
            if (result.code === 0) {
                this.props.queryUnPay()
                this.setState({ isAddCart: 0 })
            }
            return;
        }
        let result = await removeCart({
            courseid: id
        })
        if (result.code === 0) {
            this.props.queryUnPay()
            this.setState({ isAddCart: -1 })
        }
    }
}
export default connect(state => ({ ...state.personReducer }), action.personAction)(Info);
