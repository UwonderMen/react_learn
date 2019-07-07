
#redux原理

##什么是高阶组件
```
    什么是高阶组件：基于高阶函数（柯理化函数）创建的组件就是高阶组件
```


##connect函数讲解
```
    connect函数的参数：
        1、mapStateToProps：回调函数，把redux中的部分状态信息挂载到指定组件的属性上，注意：这个函数的返回值才会被挂载到组件属性上
            let mapStateToProps = state => {
                //state为redux的所有信息
                //返回值用于挂载到组件属性上的信息
                return {
                    ...state.VoteReducer
                }
            }

        2、mapDispatchToProps：回调函数，把一些需要派发的任务方法也挂载到组件属性上。注意：这个函数的返回值才会被挂载到组件属性上。
            let mapDispatchToProps = dispatch => {
                //dispatch是store实施上的一个方法，用于向reducer发送更新小心
                //mapDispatchToProps这个方法返回的是什么，就相当于把返回的这些挂载到了组件
                //属性上(一般我们挂载一些方法，这些方法完成了dispatch派发任务操作),如下：相当于把init函数挂载到了组件属性上
                //
                return {
                    support() {
                        dispatch(action.VoteAction.support())
                    },
                    against() {
                        dispatch(action.VoteAction.against())
                    }
                }
            }

```

#react-redux库中的connect函数所做的事情
```
    1、首先需要获取redux中的状态信息
    2、执行connect函数中的第一个参数和第二个参数
    3、从redux中的获取的状态信息和第一个参数函需要使用的状态做一个交集，挂载到组件属性上
```


