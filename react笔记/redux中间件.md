#redux中间件
```

```

#redux常见的中间件
```
    1、redux-logger中间件：能够在控制台清晰展示当前redux操作的流程和信息（原有状态、派发信息、修改后的状态信息）


    2、redux-thunk：处理异步的dispatch派发

    3、redux-pormise：在dispatch派发的时候支持promise操作
```

#redux中间件使用流程
```
    1、安装中间件
        cnpm install 中间件 -D -S
    2、导入中间件
        import 中间件 from  中间件
    3、使用中间件
        在创建redux容器的时候加载中间件
        let store = createStore(reducer,applyMiddleware(中间件1,中间件2....))
```


#redux-thunk中间件的语法
```
    在定义派发的时候，即通过我们写的action文件中写的派发任务时，返回一个函数（把你的异步函数返回，而不是返回任务）同时在返回的函数中他把dispatch传递给你了，你可以指定你想什么时候派发就什么时候派发。

        例子：
            import * as Types from "../action-types";

            let CustomAction = {
                create(payload){
                    return (dispatch)=>{
                        setTimeout(()=>{
                             dispatch({
                            type:Types.CUSTOM_ADD,
                            payload
                        })
                        },300) 
                    }
                }
            };

            export default CustomAction;
```

#redux-thunk中间件派发原理
```
    redux-thunk中间件如果语法是异步操作，那么会先返回一个action.type=undefined，而如果action.type=undefined时，reducer不做任何事情，等到异步操作返回以后，再次发送一个dispatch，然后触发reducer执行

```

#redux-promise中间件语法
```
    redux-promise中间件是在派发传递的参数是一个promise。
        例子：
            import * as Types from "../action-types";

            let CustomAction = {
                create(payload) {
                    return {
                        type: Types.CUSTOM_ADD,
                        payload：new Promise((reslove,reject)=>{
                            setTimeout(()=>{
                                reslove({
                            type:Types.CUSTOM_ADD,
                            payload
                        })
                            },3000)
                        })
                    }
                }
            };
            export default CustomAction;
```


#redux-promise中间件的原理
```
   redux-promise中间件会在你发送派发任务后，先发送一个dispatch给reducer，但是这个时候，reducer中的参数action中的有一个参数是promise，此时，reducer知道是promise，那么他不做任何处理，当异步处理完成后，会再次dispatch一个派发任务给reducer。此时reducer拿到结果，做进一步处理
```




