#渐进式框架
    ```
        一种最流行的框架设计思想，一般框架中都包含很多内容，这样导致框架的体积过于臃肿，拖慢加载的速度，真实项目中，我们使用一个框架，不一定用到所有的功能，此时我们应该把框架的功能进行拆分，用户想用什么，让其用什么
        **vue就是一种渐进式框架**

        所谓的全家桶其实就是渐进式框架的多部分组合
            比如Vue全家桶：vue+vue-router+vuex+axios(fetch)+vue element|vue vant

            比如reacct全家桶：react+react-dom/react-dom/react-router/redux/react-redux/axios/ant/dva/saga/mobx....
            
    ```

##react && react-dom模块作用
```
    1、react模块：react框架的核心部分，提供了Component类，可以供我们进行组件开发，提供钩子函数（即声明周期函数：所有的生命周期函数都是基于回调函数完成的）
    2、react-dom模块：将jsx语法（react独有的语法）渲染为真是的dom（能够放到页面显示）
```
