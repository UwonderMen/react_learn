import React from 'react';
import ReactDOM from 'react-dom';
import "./static/css/reset.css"
import Banner from "./components/banner";

import A from "./components/test";



let img_data = [
  {
    id: 1,
    title: "第一张",
    pic: require("./static/image/banner1.jpg")
  },
  {
    id: 2,
    title: "第二张",
    pic: require("./static/image/banner2.jpg")
  },
  {
    id: 3,
    title: "第三张",
    pic: require("./static/image/banner3.jpg")
  }
]

let root = document.body.querySelector("#root");
ReactDOM.render(<div className="main">
  {/* 
    :data 轮播图需要绑定的数据（默认空数组[]）
    :interval 自动轮播间隔时间（默认3000ms）
    :step 默认展示图片额索引（默认1）
    :speed：每一张切换所需要的运动时间（默认300ms）
  */}
  <Banner
    data={img_data}
    interval={3000}
    step={1}
    speed={500}>
  </Banner>
  <div className="123" id="dd">aaaaa</div>
  <A></A>
</div>, root);



console.log(React.createElement("div", {
  className: "main"
}, React.createElement(Banner, {
  data: img_data,
  interval: 3000,
  step: 1,
  speed: 500
}), React.createElement("div", {
  className: "123",
  id: "dd"
}, "aaaaa"), React.createElement(A, null)))



