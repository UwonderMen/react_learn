import React from 'react';
import ReactDOM from 'react-dom';
// import "./static/css/index.less";
// import qs from 'qs';

let data = [
    {name:"zhangsan",age:12},
    {name:"wangwu",age:20}
];

ReactDOM.render(<div id="box">
    hello word
    <div>
    {
        data.map((item,index)=>{
            if(item.age>15)
                return <div key={index}>
                    <span>{item.name}</span>
                    <span>{item.age}</span>
                </div>;
        })
    }
    </div>
</div>,document.body.querySelector("#root")
)


