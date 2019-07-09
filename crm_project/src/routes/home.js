import React from "react";
import { connect } from "react-redux";
import { DatePicker, Icon, Button, LocaleProvider, Calendar } from "antd";
import "../static/css/antd.css";

// 这个zh_CN就是为了是组件汉化的
import zh_CN from "antd/lib/locale-provider/zh_CN";


class Home extends React.Component {
    constructor() {
        super()
    }
    render() {
        return <LocaleProvider locale={zh_CN}>
            <div>
                {/* <DatePicker></DatePicker> */}
                {/* <Calendar /> */}
                <Button type="danger">加载</Button>
            </div>
        </LocaleProvider>
    }
}
export default connect()(Home);