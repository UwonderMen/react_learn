import * as actionTypes from "../action-types";

/*
     data的结构：
       {
           name:"xxx",
           state:0(完成的状态，0表示未完成，1表示是完成)
       } 

*/
export default function todolist(state = {
    data: [],
    flag: "all"
}, action) {
    let new_state = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case actionTypes.TODOLIST_ADD:
            let { payload } = action;
            payload.id = state.data.length === 0 ? 1 : (parseFloat(state.data[state.data.length - 1]["id"] + 1));
            new_state.data.push(payload)
            break;
        case actionTypes.TODOLIST_DONE:
            new_state.flag = action.flag
            break;
        case actionTypes.TODOLIST_WILL_DO:
            new_state.flag = action.flag
            break;
        case actionTypes.$$INIT_STATE:
            new_state = {
                data: [],
                flag: "all"
            };
            break;
        case actionTypes.TODOLIST_ALL:
            break;
        case actionTypes.TODOUPDATE:
            let { id, newState } = action,
                update_item = new_state.data.find(item => item.id === id);
            if (update_item) {
                update_item.state = newState;
            }
            break;
        case actionTypes.TODODELETE:
            {
                let { id } = action;
                new_state.data = new_state.data.filter((item, index) => item.id !== id)
            }
            break;
    };

    return new_state;
}