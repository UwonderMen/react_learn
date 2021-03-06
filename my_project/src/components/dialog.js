
//每一个组件中必须引入react这个库，因为需要基于它到的createElement方法把jsx进行
//解析渲染。因为导入组件时，会将这个组件函数执行，并且将组件函数执行后的结果放
//入到React.createElement()方法中
import React from 'react'

export default function Dialog(props) {
    let { title, age, children } = props
    console.log(children)
    console.log(React.Children)
    let con = age ? "你妹" : "你哥";
    return <section>
        <h2>{title}</h2>
        <div>{con}</div>
        {
            React.Children.count(children)
        }
    </section>
}

React.createElement(Dialog, {
    title: "\u62A5\u9519",
    flag: 0
},
    React.createElement("span", null, "123")
)