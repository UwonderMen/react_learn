import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class List extends React.Component {
    constructor() {
        super()
    }
    render() {
        let { people } = this.props;
        console.log(this.props)
        return (
            people && people.length > 0 ? <ul className="list-group">
                {
                    people.map((item, index) => {
                        let { id } = item;
                        return <li key={index} className="list-group-item">
                            <Link to={{ pathname: "/custom/detail", search: `?id=${id}` }}>
                                编号:{item.id}
                                &nbsp;
                                &nbsp;
                                姓名:{item.name}
                            </Link>
                        </li>
                    })
                }
            </ul> : <div>无员工</div>
        )
    }
}
export default connect(state => ({ ...state.CustomReducer }))(List);