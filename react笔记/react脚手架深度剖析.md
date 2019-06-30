#react脚手架深度剖析
`   
    1、create-react-app脚手架为了让结构目录更清晰，把安装webpack及配置文件都集成到了react-scripts模块中，放到了node_modules中。但是真是项目中，我们需要在脚手架默认安装的基础上，额外安装一些我们需要的模块，例如：react-router-dom/axios.....，再比如：less/less-loader...

    像上面这种情况就可以分情况考虑了：
    **
        情况一：如果我们安装其他组件，但是安装成功后不需要修改webpack修改配置项，此时我们直接安装，并调取使用即可

        情况二：我们安装的插件是基于webpack处理的，也就是需要把安装的模块配置到webpack中（重新修改webpack配置项），此时的做法如下：
            1、首先，需要把隐藏的node_modules中的配置项暴露项目中
                **
                    1、怎么暴露呢？
                        ***使用yarn  eject***
                    
                    2、暴露后的影响
                        首先暴露后会提示是否执行eject操作，这个操作时不可逆转的，一旦暴露出来webpack配置项，那么就无法隐藏回去
                    3、react项目基于git管理，如果暴露出webpack配置项会出现如下报错：
                        this hit repository has untracked files or uncommitted changes。。。。
                        为什么会出现报错？
                            因为，暴露出webpack配置项后，git怕配置项对你现在修改的文件夹的一些文件有影响。所以建议你将现在的内容提交到git暂存区，然后再暴露webpack配置
                    

                **
            2、再去修改对应的配置即可
                *
                我们浏览项目时候，也是先基于webpack编译，把编译的内容放到浏览器中运行，如果项目中使用了less，我们需要去修改webpack配置项，在配置项中加入less编译工作，这样后期再预览项目时，首先基于webpack把less编译成css，然后呈现在页面上
                *
                一旦暴露后会在项目中存在两个文件夹：
                    config：存放的是webpacck的配置文件
                        webpack.config.dev.js：开发环境下的webpack配置文件(即执行yarn start开始读取的文件)
                        webpack.config.prod.js：生产环境下的webpack配置项（即yarn build开始读取的文件)

                    scripts：存放的是可执行脚本的js文件
                        start.js：存放yarn start执行的脚本
                        build.js：执行yarn build执行的脚本
                    
                    本来在项目下的package.json文件也被修改了
    **
`
