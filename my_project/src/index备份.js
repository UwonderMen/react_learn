import React from 'react';
import ReactDOM from 'react-dom';
// import "./static/css/reset.css"
// import Banner from "./components/banner";
// import OtherSwipe from "./components/other_swipe"
// import A from "./components/test";
import "bootstrap/dist/css/bootstrap.css";
import "./static/css/todolist.css"
// import Vote from "./components/Vote/Vote";
import store from "./store";
import { Provider } from "react-redux";
import ToDoList from "./components/ToDoList/todolist";
 

// import { createStore } from "redux";

// let reducer = (state = { n: 1, m: 1 }, action) => {
//   let { type } = action;
//   switch (type) {
//     case "VOTE_SUPPORT":
//       state = { ...state, n: state.n + 1 }
//       break;
//     case "VOTE_AGAINST":
//       state = { ...state, m: state.m + 1 }
//       break;
//   }
//   return state;//只有把最新的state状态值返回才能把原有的状态修改
// }

// let store = createStore(reducer)

// 创建store后提供了三个方法：
/*
  dispatch：派发行为(传递一个对象，对象中有一个type属性)，通知reducer修改状态信息
  subscribe：事件池追加方法
  getState:获取最新管理的状态信息
*/


// let img_data = [
//   {
//     id: 1,
//     title: "第一张",
//     pic: require("./static/image/banner1.jpg")
//   },
//   {
//     id: 2,
//     title: "第二张",
//     pic: require("./static/image/banner2.jpg")
//   },
//   {
//     id: 3,
//     title: "第三张",
//     pic: require("./static/image/banner3.jpg")
//   }
// ]

let root = document.body.querySelector("#root");
ReactDOM.render(<Provider store={store}>
  <div className="col-md-4 col-md-offset-4">
    {/* 
    :data 轮播图需要绑定的数据（默认空数组[]）
    :interval 自动轮播间隔时间（默认3000ms）
    :step 默认展示图片额索引（默认1）
    :speed：每一张切换所需要的运动时间（默认300ms）
  */}
    {/* <Banner
    data={img_data}
    interval={3000}
    step={1}
    speed={500}>
  </Banner>
  <Banner
    data={img_data}
    interval={3000}
    step={1}
    speed={500}>
  </Banner> */}
    {/* <OtherSwipe data={img_data} className="container" /> */}
    <ToDoList></ToDoList>
  </div>
</Provider >, root);



