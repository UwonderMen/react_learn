import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import action from "../../store/action";


class CourseItem extends React.Component {
    constructor(props, context, updater) {
        super(props, context, updater)
    }
    render() {
        let { desc, pic, id, price, name, isSelect } = this.props.item,
            { no } = this.props;
        return <li>
            <input
                type="checkbox"
                checked={isSelect}
                style={{ display: no }}
                onChange={
                    this.props.handleSelect.bind(this, id)
                } />
            <Link to={{ pathname: "/course/info", search: `?courseid=${id}` }}>
                <h3>
                    {name}
                </h3>
                <div className="content">
                    <div className="pic">
                        <img src={pic} alt={name} />
                    </div>
                    <div className="desc">
                        <p>描述：{desc}</p>
                        <p>价格：{price}</p>
                    </div>
                </div>
            </Link>
        </li>
    }
}
export default connect(null, action.personAction)(CourseItem);
