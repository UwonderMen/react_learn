/*
    vote模块的reducer文件，主要是为这个模块进行管理
*/

//导入reducer的行为标识，即导入文件action-types.js
import * as ActionTypes from "../action-types";

export default function vote(state = { n: 0, m: 0 }, action) {
    /** 
     @state：原始redux管理的状态信息(设置初始值)
     @action:dispactch派发时候传递的行为对象(传递过来的对象包括：type(行为标识)、....等)
    */

    switch (action.type) {
        case ActionTypes.VOTE_SUPPORT:
            state = {
                ...state, n: state.n + 1
            }
            break;
        case ActionTypes.VOTE_AGAINST:
            state = {
                ...state, m: state.m + 1
            }
            break;
    }
    return state;
}