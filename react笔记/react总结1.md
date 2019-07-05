#react基础
```
    react是facebook公司开发的一款mvc框架

    mvc：model(数据层)、view(视图层)、controll(控制层

    react核心思想：
        通过数据的改变来影响视图的渲染即数据驱动
    
```

#为什么要使用脚手架？
```
    基于脚手架create-react-app可以快速攻坚一个react工程项目

    1、这个组件自动安装react核心组件即库：
        1、react
        2、react-dom
        3、react-scripts：webpack打包相关的配置
    2、自动安装了webpack，并完成了相关的配置
        1、webpack在打包中分别作了开发环境和生产环境两种不同环境的配置
        2、安装babel以及对应的语言解析包，可以把react和es6进行编译处理
        3、安装了css、style、file、scss等处理器即loader，出里css等合并压缩的问题
        4、安装了eslint，可以进行代码检测
        5、安装了很多插件，可以是实现js和css以及html的分离、打包、压缩等功能
        6、安装了webpaack-dev-sever，可以在开发环境下，编译后自动创建一个服务，我们可以基于这个服务看到开发的初步模型。当然这个webpaack-dev-sever还提供了了帮助我们打开浏览器和hot加载，并且还提供自动保存编译，以及页面自动刷新等功能
```

#安装react脚手架
```
    全局安装react脚手架：
        npm install create-react-app -g
    
    局部安装react脚手架：
        npm install create-react-app 

```

#使用react脚手架
```
    把脚手架安装到了全局环境下，以后可以使用命令操作。初始化项目命令：
        **create-react-app  项目名**
        注意：
            项目名有一定的规范，遵循npm法宝命名规范：只能是/^[a-z0-9_-]+/
        
        特点：如果您的电脑安装了yarn，使用create-react-app创建工程项目时，走的是yarn安装，yarn和npm主体是相同，但是处理起来还是有一定的区别，所以我们以后继续向工程中安装模块以及执行配置脚本打包编译的啥时候尽量使用yarn，不建议使用npm

        注意：
            如果你创建项目或者下载模块都是用yarn或者都使用npm，那么就一直使用这个么一个下去，千万别将yarn和npm混用，否则可能会出现丢包情况
```

#安装好项目工程时，项目工程目录
```
  项目工程目录：
    |-node_modules  
    |   |-.bin  所有在本地可执行的命令脚本（scripts.cmd）
    |-package.json  当前项目的配置清单
    |-public 存放额是当前项目的html页面(有可能是一些静态资源)
    |   |-index.html 主页面
    |   |-....
    |-src  存放的是项目需要的所有(存放的是项目所有的js或者静态资源，包括组件、store、路由、数据模型、ajax请求等等内容，我们开发的所有东西都放置在src下)
    |   |-index.js当前项目的主入口文件
```

#react会默认把webpack配置信息隐藏在node_modules下面的react-scripts文件中，通过引入react-scripts，来进行webpack的配置。这是为什么要这么做？
```
    脚手架构建项目的时候，为了美化结构，把所有的webpack配置等都放在node_modules中，真实项目中，我们经常会基于脚手架构建的结构自己再配置一些信息，如：处理less模块。

    但是如果还是让webpack配置放置在node_modules下，就没办法修改，因此，这个时候，提供了一个命令，可以将webpack配置导出到当前项目目录中，使用命令yarn eject。注意：此操作是不可逆的（而且操作之前，如果基于了git仓库管理，需要把所有修改的操作提交到git仓库，否则无法导出webpack配置文件）

    导出的配置文件目录：
        |-config
        |   |-webpack.config.dev.js  开发环境下的配置
        |   |-webpack.config.prod.js生产环境下的配置
        |   |-paths.js  基本配置项(包含项目主入口信息)
        |-scripts
        |   |-start.js  执行yarn start执行的文件
        |   |-build.js  执行yarn build执行的文件
        |   |-test.js   执行yarn test执行的文件

```

#可执行的本地脚本命令
```
    yarn start |npm run start
        开发预览模式
            主要是做了创建一个端口号为3000，协议为http的web服务，并按照webpack.config.dev.js配置文件的webpack配置把项目进行编译，这时会帮你编译并且打开浏览器，浏览我们的项目，当项目文件修改会自动热加载，并且重新编译，浏览器也会自动刷新展示新的效果
```

#wenpack开启的服务默认为http协议，怎么开启https协议的web服务？
```
    windows下执行命令：
    
        set HTTPS=true
        yarn start

        set PORT=1234
        yarn start

        如果上述不管用可以手动在start.js文件中指定：
            process.env.https = true;
    
    linux/mac下执行命令：
        HTTPS=true 
        yarn start

        PORT=1234
        yarn start
```

#yarn build做了什么？
```
    1、生成一个打包文件,存放最后的打包文件。yarn build命令基于webpack.config.prod.js配置文件进行打包的，webpack将项目进行编译打包后，直接可以部署上线，即只需要把build中的内容发布即可
```


#配置less模块处理
```
    1、首先安装less less-loader处理
    2、如果没有css-loader，需要安装css-loader的，模块处理
    3、配置处理less的信息
         {
              test: /\.less$/,
              exclude: lessModuleRegex,
              use: getStyleLoaders(
                {
                  importLoaders: 2,
                  sourceMap: isEnvProduction && shouldUseSourceMap,
                },
                'less-loader'
              ),
``` 