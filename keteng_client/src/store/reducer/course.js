import * as Types from "../action-types";

export default function courseReducer(
    state = {
        bannerData: []
    },
    action) {
    let new_state = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case Types.COURSER_QUERY_BANNER:
            let { code, data } = action.payload;
            new_state.bannerData = parseInt(code) === 0 ? data : state.bannerData;
            break;
    }
    return new_state;
}