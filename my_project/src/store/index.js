//redux的入口文件，即redux store入口文件

import { createStore } from "redux";
import reducer from "./reducer/index";

let store = createStore(reducer)

export default store;