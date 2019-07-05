#基础部分2
```
    react是基于独有的jsx语法实现视图(数据和html)渲染的

    jsx语法：
        jsx = javascript + html
        jsx语法的渲染使用的是ReactDOM.render()方法(ReactDOM是“react-dom”模块)
    

    ReactDOM.render()方法有三个参数：
         第一个参数：jsx元素
         第二个参数：指定挂在的容器
         第三个元素：回调函数（当把指定的jsx元素渲染后挂在到指定的容器内触发的回调函数）

```

#关于react的挂在容器
```
    1、不推荐存放jsx的容器是body(如果存放jsx元素的容器是body会报错)，一般都是使用我们自己创建的一个元素(例如：创建一个#root的div作为jsx存放的容器)

    2、jsx元素不允许出现两个根元素，如果需要绑定复杂的结构，最外层嵌套一个容器作为根元素即可

        错误写法：
            ReactDOM.render(<div>as</div><div>12</div>,root)
        
        正确写法：
            ReactDOM.render(<div>
                <div>as</div>
                <div>12</div>
            </div>,root)
    3、把数据嵌入到jsx中(不是嵌入到元素的属性中，而是正常的内容)
        可以嵌入变量或者直接的数据值
            let name="123"
            reactDOM.render(
               <div>
                <div>{name}</div>
                <div>12</div>
            </div>,root
            )
        
        不能直接嵌套对象(代指：{}、正则、日期对象、函数、或者数组中的某一项是前面这些的任意一个)。只能存放一维数组的简单的数据，非引用类型数据

        可以嵌套的基本数据类型值(null/undefined/布尔值（这些都表示空元素）)

        jsx中可以嵌入js表达式(执行js代码需要有返回结果的，这个结果需要是基本数据类型或者jsx元素)
            可以使用的js表达式：
                map()
                filter()
                every()
                some()
                reduce()
                reduceRight()

        如果涉及到判断语句，不能使用if和switch，可以使用三元运算符
            错误写法：    
                reactDOM.render(<div>
                    if(name)
                        return <h1>asd</h1>
                </div>,root
                )

            正确写法：
                 reactDOM.render(<div>
                    name?<h1>asd</h1>:null
                </div>,root
                )
        
        一些特殊注意：
            1、在jsx中，style属性必须嵌入对象，否则报错，其他的不是同类用法。
            2、事件必须在jsx语法中嵌入一个函数
            3、class要是用className代替
            4、有些属性（className、id、ref）可以直接赋一个字符串值
```

#jsx中的事件绑定
```
    jsx中的事件遵循小驼峰命名法
        onMouseEnter
        onMouseMove
        onMouseLeave
        onMouseOver
        onChange
        onClick
        onFoucs
        .....
```

#react是如何把jsx元素转换为真是的DOM元素并添加到页面上
```
    步骤如下：
        1、基于babel/babel-loader/babel-preset-react-app模块将jsx语法编译成React.createElement()样子
            React.createElement()有三个及以上参数：
                第一个参数：标签名
                第二个参数：属性
                第三个及以后的参数：子元素
        
            注意：
                1、babel/babel-loader/babel-preset-react-app模块凡是遇到标签元素都把他们转换成React.createElement()样子
                2、React.createElement()方法包括至少两个参数:
                    第一个参数:目前是当前元素的标签名
                    第二个参数：属性(没有给定元素属性，属性值为null)
                    其他的参数：当前元素的所有子元素内容(只要子元素是Html，就会变成新的React.createElement()方法)
        2、执行React.createElement()方法，把传递进来的参数处理成一个对象，处理成的对象如下：
            {
                type:标签名,
                props:自己设置的对象(但是对于key属性和ref属性要提取出来),
                children:存放自己的子元素(如果没有子元素就没有这个属性,如果有多个子元素，那么会用一个数组存放这些子元素),
                key:表示元素的唯一性,
                ref:设置的dom元素的引用
            }
        3、把React.createElement()方法生成的对象交给ReactDOM.render()方法，它把对象变成dom元素。挂载到指定容器上
```
#React.createElement()方法的详解
```
    React.createElement()方法执行会返回一个对象
```


#模块开发
```
    真实项目中使用react都是基于模块化开发或者组件开发
```


