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

```