import React from "react";
import { connect } from "react-redux";
import { Carousel } from "antd";
import { Link } from "react-router-dom";
import action from "../../store/action/index";

class List extends React.Component {
    constructor(props, context, updater) {
        super(props, context, updater)
    }
    componentDidMount() {
        let { queryBanner, bannerData } = this.props;
        if (bannerData || bannerData.length == 0) {
            queryBanner();
        }
    }
    render() {
        let { bannerData } = this.props;
        return <div className="courseListBox">
            {
                bannerData && bannerData.length > 0 ? (<div className="banner">
                    <Carousel autoplay>
                        {
                            bannerData.map((item, index) => {
                                return (
                                    <div>
                                        <Link to="/course/info" search={{ state: item.id }}><img src={item.pic} alt={item.name} data-id={item.id} /></Link>
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                </div>) : "无"
            }
        </div>
    }
}
export default connect(state => ({ ...state.courseReducer }), action.courseAction)(List);
