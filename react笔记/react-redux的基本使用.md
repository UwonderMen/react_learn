
#react-redux有什么用
```
    react-redux是把redux进一步封装，适配react项目。它能让redux操作更简洁。 基于react-redux的项目结构与redux中项目结构中的store文件夹中的内容一样。

    那么react-redux到底做了些什么？
        1、在组件调取使用的时候进行了一些优化
    
```

#react-redux库导出了那些东西
```
    1、Provider  根组件
        什么是根组件？
            当前整个项目都在Provider组件下（即把所有的组件放置在这个根组件下），作用就是：把创建的store可以供内部任何后代组件使用。这个组件是基于上下文来实现的
        
        关于这个Provider组件使用注意：
            1、Provider组件中只允许一个子元素

    2、connect  高阶组件
```

#使用react-redux步骤
```
    1、首先从react-redux库中导入根组件Provider
    2、将整个项目的根放置在Provider组件下，并且放置在Provider组件下的元素只能有一个
        <Provider store={store}>
            <div className="col-md-4 col-md-offset-4">
                <Vote title="战马能量" store={store}></Vote>
                <Vote title="淑仪" store={store}></Vote>
            </div>
        </Provider >
    3、把创建好的store作为属性传递给Provider组件，这样后代组件都可以使用store（通过上下文传递的）
    4、在组件导出的时候，使用react-redux提供的connect构建的后的高阶组件，再导出
        connect方法中有三个参数：
            mapStateToProps：把redux容器中的状态信息遍历，赋值给当前组件的属性
                这个方法有一个参数：
                    state：就是redux容器中的状态信息
                *这个方法返回的是什么，那么就把它挂载到当前组件的属性上*
                注意：为什么需要有返回值才可以设置呢在组件属性上呢？
                    因为，redux的信息有很多，一个组件不可能全部使用到，因此，可以按需的导入到当前组件上

            mapDispatchToProps：把redux中的dispatch派发行为遍历也赋值给组件的属性
                mapDispatchToProps有一个参数是dispatch，dispatch是store实例上的一个方法，用于向reducer发送更新消息。
                mapDispatchToProps这个方法返回的是什么，就相当于把返回的这些挂载到了组件属性上(一般我们挂载一些方法，这些方法完成了dispatch派发任务操作),如下：相当于把init函数挂载到了组件属性上  
```

#react-redux做了一件非常了不起的事情
```
    1、react-redux帮我们做了一件非常了不起的事情：以前我们使用redux的时候，从store拉取数据后，要改变组件的属性，必须主动添加一个更改组件状态的方法到redux中的store的事件池中，当有状态更新后主动执行事件池中的所有方法，已达到重新渲染组件。但是现在急于react-redux后，不用再主动添加一个更改属性状态的方法，react-redux帮助我们做了这件事：**所有用到redux容器的状态信息的组件，都会向事件池中追加一个方法，当状态信息更改后，通知方法执行，并且把最新的状态信息作为属性传递给组件，组件的属性改变后，会触发组件的重新渲染**

    2、react-redux还帮我们做了一件事：把dispatch派发的任务对象，自动构建成dispatch派发任务的方法(这种挂载属于全挂载，如果要使用个别的还得用以前方法)。

        以前写法：
            let mapDispatchToProps = dispatch 
                return {
                    support() {
                        dispatch(action.VoteAction.support())
                    },
                    against() {
                        dispatch(action.VoteAction.against())
                    }
                }
            }
            export default connect(mapStateToProps, mapDispatchToProps)(VoteFooter)
        现在的写法：
            export default connect(mapStateToProps, action.VoteAction)(VoteFooter)

```

#使用react-redux你只需要做两大件事，其他事情react-redux都帮助你做了
```
    1、将整个项目的根组件使用Provider包裹
    2、将实例化的redux的store作为属性传递给Provider
    3、将组件的导出改为使用react-redux提供的connect高阶组件处理后在导出组件
    4、在connect处理组件时，传递给connect的两个参数定义好。
    5、定义的这个两个参数（函数），第一个函数是为了让你的当前组件从redux的store中得到哪些状态信息并且存储到当前组件实例的属性上，第二个函数的返回值是为了将dispatch的一些派发操作挂载到实例的属性上
```

#关于react-redux中的connect方法
```
    connect方法有三个参数，但是我们只关系前两个，mapStateToProps和mapDispatchToProps，这两个方法的用途上面讲了，connect方法执行后返回一个方法，返回的方法中我们需要把当前组件作为参数传递进去
```