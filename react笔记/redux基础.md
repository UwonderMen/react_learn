#redux基础
```
    使用redux的步骤：
        1、安装redux
            cnpm install redux
        2、引入一个创建状态的容器，主要是为了统一存放状态的地方
            import {createState} from "redux"
        3、定义一些修改状态的方法，用于修改状态。这个就是reducer（相当于状态管理的管理员）应该做的事情
            reducer需要做的事情：
                1、记录所有状态修改的信息(根据行为表示走不同的修改任务)
                2、修改容器状态信息
            关于reducer中的参数：
                state：容器中原有的状态信息(如果第一次使用，没有原来的状态，给一个初始默认值)
                action：dispatch任务派发的时候传递的行为对象(这个对象必有一个type属性，是操作的行为识别，reducer就是根据这个行为识别来识别该如何修改状态信息)
        4、初始化状态管理容器，返回一个容器实例。实例包含几个方法：
            初始化容器：
                let store = createStore(reducer)

            dispatch：派发行为(传递一个对象，对象中有一个type属性)，通知reducer修改状态信息
            subscribe：事件池追加方法
            getState:获取最新管理的状态信息
```

```
    简单案例演示：
        import { createStore } from "redux";
        let reducer = (state = { n: 1, m: 1 }, action) => {
        let { type } = action;
        switch (type) {
            case "VOTE_SUPPORT":
            state = { ...state, n: state.n + 1 }
            break;
            case "VOTE_AGAINST":
            state = { ...state, m: state.m + 1 }
            break;
        }
        return state;//只有把最新的state状态值返回才能把原有的状态修改
        }

        let store = createStore(reducer)

```