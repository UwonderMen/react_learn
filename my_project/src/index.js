import React from 'react';
// import ReactDOM ,{render}from 'react-dom';
// import "./static/css/index.less";
// import qs from 'qs';
import "./self_jsx.js"

// let data = [
//     {name:"zhangsan",age:12},
//     {name:"wangwu",age:20}
// ];

console.log(React.createElement("h1", null, React.createElement("span", {
  className: "b",
  id: "a"
}, "\u4F60\u597D")))

// ReactDOM.render(<div id="box">
//     hello word
//     <div>
//     {
//         data.map((item,index)=>{
//             if(item.age>15)
//                 return <div key={index} style={{backgroundColor:"red"}}>
//                     <span>{item.name}</span>
//                     <span>{item.age}</span>
//                 </div>;
//         })
//     }
//     </div>
// </div>,document.body.querySelector("#root")
// )





