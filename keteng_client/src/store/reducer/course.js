import * as Types from "../action-types";

export default function courseReducer(
    state = {
        bannerData: [],
        courseData: {
            total: 0,
            limit: 10,
            page: 1,
            data: []
        },
        courseType: "all",
    },
    action) {
    let new_state = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case Types.COURSER_QUERY_BANNER:
            let { code, data } = action.payload;
            new_state.bannerData = parseInt(code) === 0 ? data : state.bannerData;
            break;
        case Types.COURSER_QUERY_LIST:
            let { courseType, result, flag } = action;
            new_state.courseType = courseType;
            if (parseInt(result.code) === 0) {
                let { data } = result;
                if (flag === "push")
                    new_state.courseData.data = new_state.courseData.data.concat(data);
                else
                    new_state.courseData.data = data;
            }
            for (let key in result) {
                if (result.hasOwnProperty(key)) {
                    if (key !== "data")
                        new_state.courseData[key] = result[key];
                }
            }
            break;
    }
    return new_state;
}