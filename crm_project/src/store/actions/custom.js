import * as Types from "../action-types";

let CustomAction = {
    create(payload){
        return {
            type:Types.CUSTOM_ADD,
            payload
        }
    }
};

export default CustomAction;