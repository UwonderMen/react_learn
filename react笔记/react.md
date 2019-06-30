###react简介
```
    react是一款框架，具备自己的独立开发思想（MVC的开发模式）
        1、划分组件开发
        2、基于路由的SPA单页面开发
        3、基于ES6编写的代码（最后上线的时候需要把ES6编译成ES5（借助babel进行编译））
```

###当我们全局使用cnpm install -g create-react-app的时候，会下载一个专门下载react脚手架的架子。那么下载了脚手架怎么进行后续下载react脚手架的架子呢？
```
    首先，会进入用户的家目录下的这文件夹下：C:\Users\Administrator\AppData\Roaming\npm，然后会执行create-react-app.cmd这个文件（这个文件是一个脚本文件，即可以运行在windows下的脚本），执行以后会去使用node运行node_modules下面的create-react-app目录下的index.js文件,然后进行一些操作
   
```

###使用create-react-app 创建一个react项目架子
```
    语法：create-react-app [项目名称]
    基于脚手架命令创建一个基于react的自动化/工程化项目目录，和npm发包时候的命名规范一样，项目名称中不能出现:大写字母、中文汉字、特殊符号（但是-或者_是可以的）等
```

###
```
    在REACT框架中，是所有的构建都是在js中完成（包括页面结构的构建），如果想给当前的页面导入css样式或者imge图片等内容，我们可以使用的方式：
        1、在js中基于ES6 module模块规范，使用import导入，这样webpack在打包的时候，会把导入的页面的资源文件插入到页面的结构中（决不能通过js管控的结构中通过相对目录进行资源引用，比如：使用相对路径或者绝对路径,为什么？因为webpack打包后的路径就变了）
            比如：使用import reset.min.css
        2、如果不想在js中导入(js中导入的资源最后都会基于webpack编译)，我们也可以把资源手动的在html中导入，但事实html最后也要基于webpack编译，导入的地址也不建议写相对地址，而是使用%public_URL%写成绝对地址
        比如：页面要引入reset.min.css，那么在link中要写成
        <link href="%PUBLIC_URL%/reset.min.css">
```


###脚手架生成的目录里边的内容
```
    node_modules目录:当前项目依赖的包都放在这里
        .bin：本地项目中的可执行命令，在package.json的scripts中配置对应的脚本即可(其中就是有一个:react-scripts命令)
    
    public目录：存放的是当前项目的HTML页面(单页面应用放一个index.html即可，多页面根据自己的需求放置)
    
    src目录：项目的主要的目录，项目的源码（后期是所有的jss、路由、组件都放置在这个目录下，包括需要编写的css或者图片）

    index.js：这个文件是项目的入口文件

    .gitignore：git提交时忽略的一些提交文件

    package.json：项目的配置清单
        1.开发依赖配置：
            "dependencies": {
                "react": "^16.8.6",
                "react-dom": "^16.8.6",
                "react-scripts": "3.0.1"
            }
        基于脚手架生成工程项目，自动帮我们安装了react.js（react核心模块）、react-dom（渲染模块）、react-scripts（编译打包）

        **react-scripts**
        `
            react-scripts这个包集成webpack需要的内容
                >有专门解析ES的babel
                >有专门处理css的
                >有专门检测js中是否有语法错误的ESlint包
                >有webpack相关的包
                >其他的包
            ***注意：react-scripts中没有关于处理less或者sass的一套loader，如果使用less或者sass需要自己安装***
        `

        2.package.json中的可执行脚本命令
            "scripts": {
                "start": "react-scripts start",
                "build": "react-scripts build",
                "test": "react-scripts test",
                "eject": "react-scripts eject"
            }

            可执行命令如下：npm run start/yarn start
                start：表示开发环境下，基于webpack编译处理，最后可以预览当前开发的项目成果（在webpack中安装了webpack-dev-server插件才行，基于这个插件会自动创建一个web服务，端口号是3000,我们的项目就可以运行在这个服务下。）

                *npm run start执行流程*
                    **首先，运行这条命令后会去读取package.json文件，r然后找到start这个对应的值（在package.json中的scripts下面的start），然后执行这个react-scripts start命令，此时，npm又要去node_modules目录下查找react-scripts脚本文件react-scripts.cmd，执行它。**
                
                **
                    其实react-scripts start命令执行的就是webpack开发环境打包命令，只不过把webpack的一些单独配置写成了一个库，直接通过执行这条命令就可以完成一些工作
                **

                *npm run build执行流程*
                **
                    当项目需要部署到服务器上时，我们执行yarn build或者npm run build 把项目整个编译打包(完成后悔在项目中生成一个build文件夹，这个文件夹包含所有编译后的内容，我们可以直接部署到服务器上)。而且在服务器上进行部署的时候，不需要安装任何模块，因为webpack已经把所有已经需要的内容打包到了一个js中
                **
```

###react开始
```

```


