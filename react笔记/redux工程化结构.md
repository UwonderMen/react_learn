
#redux工程化目录
```
    |-store
    |   |-reducer  //存放每一个reducer文件
    |       |-vote.js
    |       |-person.js
    |       |-index.js  //把每个reducer最后合并成一个reducer文件
    |   |-action    //存放每一个模块需要进行的派发任务 (ActionCreator)
    |       |-vote.js  
    |       |-person.js
    |       |-index.js  //所有模块的action进行合并
    |   |-action-types.js  //所有派发任务的行为标识都在这里宏观管理
    |   |-index.js  //创建store
```