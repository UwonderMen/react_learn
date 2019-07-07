/*
 *1、reducer目录下有一个index.js文件，用来合并不同的模块的reducer。 
 *  为什么要把reducer合并呢？
 *      项目中只允许一个reducer，不能超过一个，只能把每个模块的
 *          reducer合并成一个总的reducer
 * 
 * 2、为了保证合并后的reducer每个模块管理的状态信息不互相冲突
 * redux在合并每个reducer时，把容器中的状态进行分开管理。
 * 
 *      例如：vote模块中有状态 title、count，但是person模块中也有title、baseinfo状态信息，
 *              那么如果直接把这些状态和并在一起肯定会冲突，因此，redux在合并时帮我们这么做了：
 *          得到总得状态信息：   state = {
 *                                      vote：{
 *                                          title、
 *                                          count 
 *                                        }，
 *                                       person:{
 *                                           title,
 *                                           baseinfo
 *                                        }
 *                                  }
 * 
 *      因此，如果多个recuer和并在一起后，获取每个模块的状态信息的方式就变了，
 *  比如：以前获取vote的状态信息直接let {title} = getState()，现在必须let {title} = getState().vote
 */

// import VoteReducer from "./vote";
// import PersonReducer from "./person";
import ToDoListReducer from "./todolist";

//使用redux模块提供的combineReducers和并reducer
import { combineReducers } from "redux";

let reducer = combineReducers({
    // VoteReducer,
    // PersonReducer,
    ToDoListReducer,
});

export default reducer;
