import reducer from "./reducers";
import { createStore, applyMiddleware } from "redux";
import reduxLogger from "redux-logger";
import reduxThunk from "redux-thunk";

const store = createStore(reducer, applyMiddleware(reduxLogger,reduxThunk));

export default store;
