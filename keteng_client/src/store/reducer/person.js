import * as Types from "../action-types";

export default function personReducer(
    state = {
        baseInfo: null,
        shopCart: {
            unpay: [],
            pay: [],
            selectAll: true  //存储全选还是全不选
        }
    }, action) {
    let new_state = JSON.parse(JSON.stringify(state));

    switch (action.type) {
        case Types.PERSON_QUERY_BASE:
            if (parseInt(action.payload.code) === 0) {
                new_state.baseInfo = action.payload.data;
            }
            break;
        case Types.COURSE_PAY:
            if (action.payload.code === 0) {
                new_state.shopCart.pay = action.payload.pay;
            }
            break;
        case Types.COURSE_UNPAY:
            if (action.payload.code === 0) {
                new_state.shopCart.unpay = action.payload.unpay;
                new_state.shopCart.unpay.map(item => {
                    item.isSelect = true;
                    return item;
                })
                new_state.shopCart.selectAll = true;
            }
            break;
        case Types.COURSE_HANDLE:
            let { mode } = action;
            if (mode === "all") {
                new_state.shopCart.selectAll = !new_state.shopCart.selectAll
                new_state.shopCart.unpay.map(item => {
                    item.isSelect = new_state.shopCart.selectAll
                    return item;
                })
            } else {
                let course = new_state.shopCart.unpay.find(item => item.id === mode);
                course.isSelect = !course.isSelect;
                let flag = new_state.shopCart.unpay.every(item => item.isSelect === true)
                if (flag)
                    new_state.shopCart.selectAll = true;
                else
                    new_state.shopCart.selectAll = false;
            }
    }
    return new_state;
}