import React from "react";
import { connect } from "react-redux";
import { Carousel, Icon, Button } from "antd";
import { Link } from "react-router-dom";
import action from "../../store/action/index";

class List extends React.Component {
    constructor(props, context, updater) {
        super(props, context, updater);
        this.state = {
            isloading: false
        }
    }
    componentDidMount() {
        let { queryBanner, bannerData, queryList, courseData } = this.props;

        if (bannerData || bannerData.length == 0) {
            queryBanner();
        }
        if (courseData.data.length === 0) {
            queryList();
        }
    }
    componentWillReceiveProps() {
        //componentWillReceiveProps周期函数的触发一般是组件的属性发生改变(路由重新渲染或者是redux容器的状态变化引起导致)
        this.setState({
            isloading: false
        })

    }
    render() {
        let { bannerData, courseData, courseType } = this.props;
        let data = courseData.data;
        console.log(data)
        return <div className="courseListBox">
            {
                bannerData && bannerData.length > 0 ? (<div className="banner">
                    <Carousel autoplay>
                        {
                            bannerData.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <Link to={{ pathname: "/course/info", state: item.id }}><img src={item.pic} alt={item.name} data-id={item.id} /></Link>
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                </div>) : "无"
            }
            <div className="courseList">
                <h2>
                    <Icon type="menu-fold" />{this.queryType()}
                </h2>

                {
                    data && data.length > 0 ? (
                        <div>
                            <ul>
                                {
                                    data.map((item, index) => {
                                        return <li key={index}>
                                            <Link to={{ pathname: "/course/info", search: `?courseid=${item.id}` }}>
                                                <h3>{item.name}</h3>
                                                <div className="content">
                                                    <div className="pic">
                                                        <img src={item.pic} alt={item.name} />
                                                    </div>
                                                    <div className="desc">
                                                        <p>
                                                            描述：{item.desc}</p>
                                                        <p>
                                                            时间：{item.time}</p>
                                                        <p>
                                                            价格：{item.price}</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                    })
                                }
                            </ul>
                            {
                                courseData.total > courseData.page * courseData.limit ? (<Button type="dashed" className="loadMore" onClick={this.loadmore} loading={this.state.isloading}>加载更多数据</Button>) : null
                            }</div>) : "无"
                }
            </div>
        </div>
    }
    queryType() {
        let { courseType } = this.props,
            text = "全部课程";
        switch (courseType) {
            case "react":
                text = "react框架开发";
                break;
            case "vue":
                text = "vue框架开发";
                break;
            case "wechat":
                text = "微信小程序";
                break;
        }
        return text;
    }
    loadmore = () => {
        if (this.state.isloading) return;
        this.setState({ isloading: true })
        let { queryList } = this.props;
        let { page, limit, total, courseType } = this.props.courseData;
        if ((page + 1) <= total / limit)
            queryList({
                page: page + 1,
                flag: "push",
                type: courseType
            })
        else
            return;
    }
}
export default connect(state => ({ ...state.courseReducer }), action.courseAction)(List);
