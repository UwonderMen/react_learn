/** 
 * 实现Provider组件
 * Provider组件做的事情：
 *      1、接受通过属性传递进来的store，把store挂在到上下文中
 *          这样当前项目中使用redux中的store，直接通过上下文接受即可
 *      2、在组件的render函数中，把传递给Provider的子元素渲染
 * 
 * 
 * 
 * 
 * connect函数：
 *     1、4个参数，最常使用的前两个（mapStateToProps和mapDispatchToProps）。
 *     2、返回值为一个函数：函数中支持一个参数（组件作为参数）
 *          注意：这个方法主要做的事情就是将redux中的状态（定义过要挂载的状态挂载到
 *              组件上）
 *         注意：这个函数会返回一个代理组件，在代理组件中，我们需要获取Provider在上下文中存储的store中的state和dispatch
 *              ，把mapstateToProps和mapDispatchToPropss回调函数执行，接收返回的结果，在把这些结果
 *              挂载到需要操作的组件的属性上
*/

import React from "react";
import PropType from "prop-types";

class Provider extends React.Component {
    static childContextType = {
        store: PropType.object
    }
    getChildContext() {
        return {
            state: this.props.state
        }
    }
    constructor(props, context) {
        super(props, context)
    }
    render() {

    }
}

function connect(mapStateToProps,mapDispatchToProps) {
    return function connectHOT(Component) {
        return class Proxy extends React.Component {
            //获取祖先组件中传递下来的store
            static contextType = {
                store: PropTypes.object
            }

            //获取祖先组件中传递下来的store中的state和dispatch，把传递的两个回调函数
            //执行，接收返回结果
            constructor(props, context) {
                super(props, context);
                this.state = this.queryMountProps();
            }

            //react-redux帮我们做了一件事：基于redux中的subscribe向事件池中
            //追加一个方法，当容器状态改变，我们需要重新获取最新状态信息，并且重新把组件渲染，把最新的状态信息
            // 通过属性传递给组件
            componentDidMount() {
                let { subscribe } = this.context.store;
                subscribe(()=>{
                  this.setState(this.queryMountProps())  
                })
            }

            render() {
                /**
                 * 渲染组件，并把获取到的信息(状态、方法)挂载到组件的属性上
                 */
                return <Component {...this.state} />
            }

            queryMountProps = () => {
                let { store } = this.context,
                    state = store.getState();

                //将传递进来的mapStateToProps函数执行，获取到返回的状态
                //从redux中获取最新的信息，基于回调函数筛选，返回的是需要挂载到组件属性上的信息
                let propsState = typeof mapStateToProps === "function" ? mapStateToProps(state) : {};
                let propsDispatch = typeof mapDispatchToProps === "function" ? mapDispatchToProps(store.dispatch) : {};
                return {
                    ...propsState,
                    ...propsDispatch
                }
            }
        }
    }
}

export {
    Provider
};