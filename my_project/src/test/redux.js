
/** 
 * 
 *createStore：创建redux容器
 *  参数：
 *      reducer函数
 *  返回值：
 *      是一个store实例，即redux容器实例
 *      实例包含属性：
 *          getState
 *          dispatch
 *          subscribe
*/

let reducer = (state = {}, action) => {
    //state表示原来的状态信息
    //action表示派发任务是传递的对象（包含类型和一些参数）。
    switch (action.type) {
        //TODO
    }
    return state;  //返回的state会替换原来的state
}

function createStore(reducer) {
    /** 
     * createStore函数创建一个store，
     * state用来存储管理的状态信息，listenAry用来存储事件池中的方法
     * 
     * state状态再createStore方法中定义时不用赋初始值,因为在reducer方法
     * 中会定义默认的state初始值。同时我们会在创建容器的时候就把dispatch方法执行一次
     * 执行的时候，reducer中的state参数的默认值会赋值给当前容器的state
     * 
    */
    let state = {},
        listenAry = [];


    function dispatch(action) {
        /** 
         * 基于dispatch实现任务分发
         * 
         * action表示派发任务是传递的对象
        */

        // 执行dispatch的时候回执行reducer方法
        state = reducer(state, action);

        for (let i = 0; i < listenAry.length; i++) {
            if (typeof listenAry[i] === "function")
                listenAry[i]()
            else
                listenAry.splice(i, 1);
            i--;
        }
    }

    //创建容器时执行一次，为了是把reducer定义的参数state默认值
    //赋值给当前redux容器的state
    dispatch({ type: "$$INIT_DEFAULT_STATE" });


    function getState() {

        /*redux中的getState方法，这里边的处理过于简单，而我们需要保证返回的状态信息不能和容器中的state是同一个堆内存
            （否则外面可以直接获取redux容器对象store修改容器里边的状态信息，这不符合使用dispatch来执行reducer方法修改
            redux容器的状态信息，即如果直接外界可以对容器中的状态进行修改，那么没必要使用dispatch方法出阿发reducer方法执行来
            修改redux容器状态信息）
            
            解决方法：使用深度克隆
        */
        return JSON.parse(JSON.stringify(state));
    }

    function subscribe(callback) {
        /** 
         * 向事件池中添加方法
        */

        if (typeof listener !== 'function') {
            throw new Error('Expected the listener to be a function.');
        }

        let isExists = listenAry.includes(callback);
        !isExists ? listenAry.push(callback) : null

        return function unsubscribe() {
            let index = listenAry.indexOf(callback);

            //如果是listenAry.splice(index, 1)这种方式删除，容易造成数组塌陷
            // listenAry.splice(index, 1)
            listenAry[index] = null
        }
    }

    function combineReducers(reducers) {
        /**
         * combineReducers函数用于合并多个reducer为一个
         * 参数：reducer（包含多个reducer的对象集合）
         * 返回值：返回一个新的reducer函数（把这个返回值赋值给createStore函数）
         * 
         * 
         * 特殊处理：
         *  1、合并reducer之后，redux容器中的state也变为对应对象管理的模式
         */

        return function news_reducer(state = {}, action) {
            /*
                dispatch派发执行的时候，执行的是返回的reducer，这里也要返回一个最终的
                state状态替换原来的state，而且这个state中包含每个模块的状态信息


                所谓的合并reducer其实就是dispatch派发任务的时候，把每一个模块
                的reducer都单独执行一遍，把执行的结果及状态汇总在一起，替换原有容器的状态信息
                
            */

            let newState = {};

            for (let key in reducers) {
                if (!reducers.hasOwnProperty(key)) break;
                //state[key]：当前模块在redux容器中存储的状态信息
                //reducers[key]函数返回的值是当前模块的状态值，需要把他放置在
                //新的状态管理中
                newState[key] = reducers[key](state[key], action);
            }

            return newState;
        }
    }

    return {
        dispatch,
        getState,
        subscribe,
        combineReducers
    }
}


/*  
    当执行createStore方法的时候，把reducer传递进来，
    但是此时reducer方法还没有执行，当dispatch的时候才执行，
    此时通过执行reducer修改容器中的状态。
*/
let store = createStore(reducer);