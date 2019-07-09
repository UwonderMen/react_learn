import React from "react";
import { connect } from "react-redux";
import qs from "qs";

class Detail extends React.Component {
    constructor() {
        super()
    }
    render() {
        let { people, location: { search } } = this.props;
        let params = qs.parse(search, { ignoreQueryPrefix: true })
        let personal = people ? people.find((item) => item.id === params.id) : null;
        if (!personal) return "当前用户不存在";
        return <div>
            编号:{personal.id}
            <br />
            姓名:{personal.name}
        </div>
    }
}
export default connect(state => state.CustomReducer)(Detail);