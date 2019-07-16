import React from "react";
import { connect } from "react-redux";
import CourseItem from "./courseitem";
import action from "../../store/action";
import { Alert, Button, Modal } from "antd";
import { checkLogin, payFor } from "../../api/person";
import { removeCart } from "../../api/course";
import { Link } from "react-router-dom";
const { confirm } = Modal;
class UnPay extends React.Component {
    constructor(props, context, updater) {
        super(props, context, updater);
        this.state = {
            isLogin: false
        }
    }

    async componentWillMount() {
        let result = await checkLogin();
        if (parseInt(result.code) === 0) {
            this.setState({
                isLogin: true
            })
        }
    }

    render() {
        let { isLogin } = this.state;
        return isLogin ? (this.props.shopCart.unpay.length === 0 ? "你还没有商品，请前往购物中心购物" : (<div><div style={{ marginTop: ".2rem", lineHeight: ".7trm", padding: "0 .1rem" }}><input type="checkbox" checked={this.props.shopCart.selectAll} onChange={this.props.handleSelect.bind(this, "all")} />全选/全不选 <Button type="danger" onClick={this.handleRemove}>删除</Button><Button type="primiary" onClick={this.handlePayFor}>支付</Button></div><ul className="courseItem">
            {
                this.props.shopCart.unpay.map((item, index) => {
                    return <CourseItem item={item} key={index} />
                })
            }
        </ul></div>)) : (<Link to="/person/login"><Alert
            message="请先登录"
            type="error"
            showIcon
            className="alert"></Alert></Link>
            )
    }
    handleRemove = () => {
        let selectList = [];
        this.props.shopCart.unpay.forEach(element => {
            if (element.isSelect)
                selectList.push(element.id)
        });
        if (selectList.length === 0) {
            alert("没有选择任何商品")
            return;
        } else {
            selectList = selectList.map(item => {
                return removeCart({ courseid: item })
            })
            let callback = this.props.queryUnPay,
                content = "确定删除此些商品？？";
            this.showConfirm(selectList, content, callback)
        }
    }

    showConfirm = (selectList, content, callback) => {
        let _this = this;
        confirm({
            content: content,
            onOk() {
                Promise.all(selectList).then(() => {
                    callback()
                })
            },
            onCancel() {
                return;
            },
        });
    }

    showPayForConfirm = (selectList, content) => {
        let _this = this;
        confirm({
            content: content,
            onOk() {
                Promise.all(selectList).then(() => {
                    _this.props.queryUnPay();
                    _this.props.queryPay();
                })
            },
            onCancel() {
                return;
            },
        });
    }

    errorLoginHandle = () => {
        let _this = this;
        confirm({
            content: "请先登录",
            onOk() {
                _this.props.history.push("/person/login")
            },
            onCancel() {
                _this.props.history.push("/course")
            },
        });
    }

    handlePayFor = async () => {
        let result = await checkLogin();
        if (parseInt(result.code) !== 0) {
            this.errorLoginHandle()
            return;
        }
        let content = "确定支付？？",
            selectList = [];
        this.props.shopCart.unpay.forEach(element => {
            if (element.isSelect)
                selectList.push(element.id)
        });
        if (selectList.length === 0) {
            alert("没有选择任何商品")
            return;
        } else {
            selectList = selectList.map(item => {
                return payFor(item)
            })
            this.showPayForConfirm(selectList, content);
        }
    }

}
export default connect(state => ({ ...state.personReducer }), action.personAction)(UnPay);