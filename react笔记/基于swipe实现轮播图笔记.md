#基于模块swipe插件做轮播图
```
    步骤：
        1、安装swipe插件及依赖的库
            yarn add swipe-js-iso  react-swipe
        
        2、只导入react-swipe库就行，这个库是swipe组件类
            import ReactSwipe from "react-swipe";
        
        3、使用这个组件
            <ReactSwipe
                className={props.className}
                swipeOptions={{
                    speed: 300,
                    startSlide: 1,
                    auto: 1000
                }}>
                {
                    props.data.map((item, index) => {
                        return <li key={index}>
                            <img src={item.pic} alt={item.title} />
                        </li>
                    })
                }
            </ReactSwipe>
        
        注意：swipeOptions属性是配置组件的一些属性，是一个对象。具体参数请看网站：github.com/voronianshi/swipe-js-iso
```