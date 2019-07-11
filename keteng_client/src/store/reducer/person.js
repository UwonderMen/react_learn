import * as Types from "../action-types";

export default function personReducer(
    state = {},
    action) {
    let new_state = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case Types.PERSON_QUERY_BASE:
            let { payload } = action;
            if (payload && parseInt(payload.code) === 0) {
                new_state.baseInfo = payload.data;
            }
            break;
    }
    return new_state;
}