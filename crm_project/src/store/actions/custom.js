import * as Types from "../action-types";

let CustomAction = {
    create(payload) {
        return (dispatch) => {
            setTimeout(() => {
                dispatch({
                    type: Types.CUSTOM_ADD,
                    payload
                })
            }, 3000);
        }
    }
};

export default CustomAction;