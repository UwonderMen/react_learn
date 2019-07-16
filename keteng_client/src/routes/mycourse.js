import React from "react";
import { Menu, Icon } from "antd";
import "../static/css/mycourse.less";
import { Switch, Route } from "react-router-dom";
import UnPay from "../routes/mycourse/unpay";
import Pay from "../routes/mycourse/pay";

class MyCourse extends React.Component {
    constructor(props, context, updater) {
        super(props, context, updater);
        this.state = {
            current: "unpay"
        }
    }
    render() {
        return <div className="MycourseBox">
            <Menu
                selectedKeys={[this.state.current]}
                mode="horizontal"
                onClick={this.handleClick}>
                <Menu.Item
                    key="unpay">
                    <Icon type="pay-circle" />
                    未支付
                </Menu.Item>
                <Menu.Item key="pay">
                    <Icon type="red-envelope" />
                    已支付
                </Menu.Item>
            </Menu>
            <Switch>
                <Route path="/mycourse" exact component={UnPay}></Route>
                <Route path="/mycourse/pay" exact component={Pay}></Route>
            </Switch>
        </div >
    }
    handleClick = (ev) => {
        this.setState({
            current: ev.key
        })
        this.props.history.push(ev.key === "unpay" ? "/mycourse" : "/mycourse/pay")
    }
}
export default MyCourse;