

#Ant Desgin的使用步骤
```
    1、首先安装Ant Desgin
        yarn add antd或者cnpm install antd
    
    2、导入Ant Desgin样式表
        Ant Desgin导入样式表有点规则：
            我们需要新建一个css样式表，在这个新建的样式表中使用@import导入Ant Desgin样式表。然后全局导入新建的css样式表
                导入案例：
                    /* 导入antd的样式表 */
                    @import "~antd/dist/antd.css";


    3、按需导入需要的组件。
        import {组件} from "antd"
    
    4、Ant Desgin提供的组件都是英文国际化的，需要中文显示，我们需要导入汉化模块
    
    
    
    注意：
        1、国际化组件（LocaleProvider）的作用：
            把组件汉化，因为Ant Desgin默认是国际化的组件
        2、不支持全局导入Ant Desgin提供的样式表

        3、要使用汉化的组件，那么必须根组件是LocaleProvider

```