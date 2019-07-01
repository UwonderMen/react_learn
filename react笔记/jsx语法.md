#react-dom模块讲解
```
    react-dom模块有一个方法render()，作用：将jsx元素渲染到页面中
        *使用简介*
        `
        import ReactDOM from 'react-dom'
        ReactDOM.render([jsx],[container],[callback])
            jsx：react的虚拟元素
            container：容器，我们想把元素放在页面中的哪个位置
            callback：当我们把内容放在页面中呈现触发的回调函数（一般不怎么使用）
        `
```
----------------------------
#jsx简介
##jsx语法是react独有的。jsx是javascript+xml的简写,这种语法与使用es6语法模板字符串拼接html是类似的，都是把html结构代码与js代码或者数据混在一起，但是注意了，jsx不是一个字符串

##关于渲染的jsx的dom元素存放位置
`
    渲染的jsx的dom元素最好放置在自己定义的容器中。一般是id为root的div中即这个id为root的div作为根元素，不能直接放置在body中，否则存在一个警告,警告如下:
        ***Warning: render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.***
`

#jsx语法
```
    jsx语法：
        {js表达式}

        例子：
            let data = "jerrry";
            let root = document.querySelector("#root");
            ReactDOM.render(<div>hello world {data}</div>,root,()=>{
                let obj = document,querySelector("#box")
                console.log(obj.tagName)
            })
    js表达式使用大括号包裹起来，但是要求js表达式执行完成必须要有返回结果(单值，数组（数组如果包含引用类型就不行），对象(对象不能直接放进去，否则报错)等这些都是js代码且都有返回值)

    注意：{js表达式}大括号内放置的不能直接是一个对象，数组，函数，可以是js的基本数据类型的值(如果是布尔类型的值，那么什么都不会显示包括null、undefined，都是代表空)

    注意：大括号中只能是js表达式，不能支持for/while循环、if条件判断语句

    注意：js表达式返回的结果可以是jsx语法的代码
        例如：
        {
            data.filter((item,index)=>{
                return <div key={index}>{item}</div>
            })
        }


    循环数组创建jsx元素(一般都基于数组的map方法完成迭代)，需要给创建的元素设置唯一的key值（当前循环内容唯一）

    一个jsx如果标签超过两个，那么只能有一个根元素
        错误写法：
            let data = "jerrry";
            let root = document.querySelector("#root");
            ReactDOM.render(<div>hello world {data}</div><div>asd</div>,root)
        正确写法：
            let data = "jerrry";
            let root = document.querySelector("#root");
            ReactDOM.render(<div>
                <div>hello world {data}</div>
            </div>,root)


        1、给元素设置样式类使用的是className而不是class
            错误写法：
            let data = "jerrry";
            let root = document.querySelector("#root");
            ReactDOM.render(<div class="box">hello world {data}</div>,root)
        正确写法：
            let data = "jerrry";
            let root = document.querySelector("#root");
            ReactDOM.render(<div className="box">
                {data}</div>,root)
        
        2、style中不能直接的写样式字符串，需要基于样式对象来遍历赋值。注意：{js表达式}中不能直接放置对象，但是除了跟style属性赋值。注意：style的属性要使用小驼峰，不能使用-连接
            错误写法：
                let data = "jerrry";
                let root = document.querySelector("#root");
                ReactDOM.render(<div style="backgroundColor:red">hello world {data}</div>,root)
            正确写法：
                let data = "jerrry";
                let root = document.querySelector("#root");
                ReactDOM.render(<div style={{backgroundColor:'red'}}>
                    {data}</div>,root)
```

------------------------

#jsx的渲染流程
    ```
        前提：
            import ReactDOM，{render} from 'react-dom';
            这句话的意思是从react-dom库中导入ReactDOM，逗号后边的内容，是把react-dom导出的对象进行解构<=>等价于import {render} from "react-dom"

            注意：这种方式导入不用使用ReactDOM.render()，直接可以使用render()
        
        jsx渲染流程或者机制：
            1、基于babel中的语法解析模块(使用的解析器是：babel-preset-react)，主要是把jsx语法编译为react.createElement(...)结构

            jsx元素：
                <div className="box">
                    {data}
                </div>
            转换成js语法：
                "use strict";
                React.createElement("div", {
                    className: "box"
                }, data);
            
            注意：import React from 'react';这个react库中有一个createElment()方法，
                React.createElement(type,props,children)

            2、执行 React.createElement()方法，这个方法会创建一个对象,这个对象其实就是虚拟DOM
                console.log(React.createElement("div", {
                    className: "box"
                }, data))

                打印：
                    {$$typeof: Symbol(react.element), type: "h1", key: null, ref: null, props: {…}, …}
                
                这个虚拟DOM有哪些属性：
                    props: 这是一个对象，里边包含的属性
                        props:{
                            id: id名
                            className:class名
                            type:子元素的标签名
                            children：子元素的孩子
                            key:唯一性约束
                        }
                    ref: 受控组件与非受控组件相关
                    type: 表示标签名
                    key:唯一约束(一般用在循环中，表识唯一性)
            3、导入import{render} from 'react-dom';使用render方法将 React.createElement()方法创建的虚拟dom其实是个对象，动态绑定到页面上，即伪代码如下：
                render({type:"h1",props:{....}})
    ```

#jsx的渲染流程原生实现
```
    使用原生实现React.createElement()方法
        分析：
            React.createElement(type，props，children)接受三个参数：
                type：标签类型
                props：属性
                children：子元素
            
            React.createElement(type，props，children)需要返回一个对象


        实现步骤：
            1、创建一个对象(这个对象默认有四个属性：type、props、ref、key)，最后把这个对象返回
            
            2、根据传递的值修改这个对象，修改部分：
                type：传递进去的type就是type属性
                props需要做一定的修改：大部分传递props、
                中的属性都赋值给对象props，有一些比较特殊的，如ref何key属性，我们需要吧传递的props中的这个两个属性值，需要给创建对象这个两个属性，而传递的props中的这两个值必须置为null或者undefined。把传递的children作为新创建对象的props中的一个属性

        代码实现：
            function createElement(type,props,children){
                    props = props || {}
                    let _news_obj = {
                        type:null,
                        props:{

                        },
                        ref:null,
                        key:null
                    }
                    "key" in props ? (_news_obj.key = props.key, props.key=null): _news_obj.key=null;
                    "ref" in props ? (_news_obj.ref = props.ref, props.ref=null): _news_obj.ref=null;
                    return {
                        ..._news_obj,
                        type,
                        props:{...props,children}}
                }
                let obj = createElement("h1", {className: "box"},"hhj")

```
```
        使用原生实现ReactDOM.render()方法
        简介：
            render()方法把创建的一个虚拟dom对象，生成对应的DOM元素，插入或者挂载到页面中
        
        代码实现：
            function render(obj,container,callback){
            let {type,props} = obj;
            let newElement = null;
            newElement = document.createElement(type);
            if(props.children instanceof Object){
                for(let attr in props){
                    //遍历属性是从自身开始，然后再到原型链上遍历
                    if(!props.hasOwnPorperty(attr))break;
                    if(!props[attr])continue;
                    if(attr === "className") {
                        attr = "class";
                        newElement.setAttribute(attr,props[attr])
                        continue;
                    }
                    if(attr === "style"){
                        if(attr==="")continue;
                        for(let cssAttr in props[attr]){
                            if(props[attr].hasOwnPorperty(cssAttr)){
                                //这里存在性能影响
                                //可以改为使用ele.style.cssText
                            newElement.style[cssAttr] = props[attr][cssAttr];
                            }
                        }
                        continue;
                    }
                    newElement.setAttribute(attr,props[attr])
                }
                render(props.children,newElement,null)
            }else{
                if(typeof props.children == "string"){
                        newElement.innerHTML = props.children;
                        container.appendChild(newElement)
                    }else{
                        container.appendChild(newElement)
                    }
            }
            callback&&callback()
        }
        render({type: 'h1',
                props: { className: 'box', children: 'hhj' },
                ref: null,
                key: null },document.getElementById("root"),()=>{
                console.log(123)})

    **使用原生实现复杂的ReactDOM.render()方法和React.createElement()方法**

    1、实现React.createElement()方法
        function createElement(type, props, ...childrens) {
            props = props || {};
            let news_obj = {
                type: null,
                props: {
                    children: ""
                },
                ref: null,
                key: null
            };
            if ("key" in props) {
                news_obj.key = props.key;
                props.key = undefined
            }
            if ("ref" in props) {
                news_obj.ref = props.ref;
                props.ref = undefined
            };
            return {
                ...news_obj,
                type,
                props: {
                    ...props,
                    children: childrens.length <= 1 ? (childrens[0] || "") : childrens
                }
            };
        }
    
    -----------------------------
    2、ReactDOM.render()方法实现
        function render(obj, container, callback) {
        let { type, props } = obj;
        let newElement = null;
        newElement = document.createElement(type);
        for (let attr in props) {
            //遍历属性是从自身开始，然后再到原型链上遍历
            if (!props.hasOwnPorperty(attr)) break;
            if (!props[attr]) continue;
            switch (attr) {
                case "className":
                    attr = "class";
                    newElement.setAttribute(attr, props[attr])
                    continue;
                case "style":
                    if (attr === "") continue;
                    for (let cssAttr in props[attr]) {
                        if (props[attr].hasOwnPorperty(cssAttr)) {
                            //这里存在性能影响
                            //可以改为使用ele.style.cssText
                            newElement.style[cssAttr] = props[attr][cssAttr];
                        }
                    }
                    continue;
                case "children":
                    /*
                        children里边的值包含哪些：
                            1、可能是一个值：可能是一个字符串也可能是一个jsx对象
                            2、可能是一个数组：数组中的每一项可能字符串，也可能是一个jsx对象
                        
                            像这种有多种值的情况一般都会转成统一的情况进行处理，比如这里统一转
                            成数组来考虑,后期统一对数组进行操作
                    */
                    // newElement.innerHTML = props.children;
                    // container.appendChild(newElement)
                    props[attr] = !props[attr] instanceof Array ? [props[attr]] : null;
                    props[attr].forEach((item, index) => {
                        //验证item类型
                        //1、如果是字符串，那么创建文本节点，创建后放到上一级盒子里
                        //2、如果是对象，那么创建元素节点，创建后appendChild到上一级盒子中
                        if (typeof item === "string") {
                            let textNode = document.createTextNode(item)
                            newElement.appendChild(textNode)
                        } else {
                            render(item, newElement, null)
                        }
                    })
                    continue
                default:
                    newElement.setAttribute(attr, props[attr])
                    break;
            }
        }
        container.appendChild(newElement)
        callback && callback()
    }
```