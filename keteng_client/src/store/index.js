import { createStore, applyMiddleware } from "redux";
import reduxLogger from "redux-logger";
import reduxPromise from "redux-promise";
import reduxThunk from "redux-thunk";
import reducers from "./reducer";

export default createStore(reducers, applyMiddleware(reduxPromise, reduxThunk))