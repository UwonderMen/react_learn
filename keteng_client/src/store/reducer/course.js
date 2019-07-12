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
        shopCart: {
            unpay: [],
            pay: []
        }
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
                    else if (key === "unpay")
                        new_state.shopCart.unpay = result[key];
                    else if (key === "pay")
                        new_state.shopCart.pay = result[key];
                }
            }
            break;
        case Types.COURSE_PAY:
            {
                let { code, data } = action.payload;
                if (code === 0) {
                    new_state.shopCart.pay = data;
                }
            }
            break;
        case Types.COURSE_UNPAY:
            {
                let { code, data } = action.payload;
                if (code === 0) {
                    new_state.shopCart.unpay = data;
                }
            }
            break;

    }
    return new_state;
}