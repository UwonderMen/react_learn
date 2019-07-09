import * as Types from "../action-types";

export default function custom(
    state = {},
    action) {
    let new_state = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case Types.CUSTOM_ADD:
            new_state.people = new_state.people ? new_state.people : [];
            new_state.people.push(action.payload)
            break;
    }
    return new_state;
}