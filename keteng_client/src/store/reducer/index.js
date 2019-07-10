import courseReducer from "./course";
import personReducer from "./person";
import { combineReducers } from "redux";

let reducer = combineReducers({
    courseReducer,
    personReducer
});

export default reducer;