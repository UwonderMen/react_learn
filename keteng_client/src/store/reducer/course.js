import * as actionTypes from "../action-types";

export default function courseReducer(
    state = {},
    action) {
        
    let new_state = JSON.parse(JSON.stringify(state));
    switch (action.type) {

    }
    return new_state;
}