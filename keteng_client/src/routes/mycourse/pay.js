import React from "react";
import { connect } from "react-redux";
import { checkLogin } from "../../api/person";
import { Alert } from "antd";
import CourseItem from "./courseitem";
import action from "../../store/action";
import { Link } from "react-router-dom";

class Pay extends React.Component {
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

        return isLogin ? (this.props.shopCart.pay.length === 0 ? "你还没有购买任何商品" : (<ul className="courseItem">
            {
                this.props.shopCart.pay.map((item, index) => {
                    return <CourseItem no="none" item={item} key={index} />
                })
            }
        </ul>)) : (<Link to="/person/login"><Alert message="请先登录" type="error" showIcon className="alert"></Alert></Link>)
    }
}
export default connect(state => ({ ...state.courseReducer, ...state.personReducer }), action.courseAction)(Pay);