#react路由的放置位置
```
    1、路由可以在routes文件中单独建一个App.js组件文件放置路由内容，然后再index.js主文件中导入
        例如：
                <div>
                    {/* Nav组件是头部区域 */}
                    <Nav />
                    {/* App组件里边是基于HashRouter展示不同的页面 */}
                    <App />
                </div>
    
    2、直接将路由放置在index.js文件中
        例如：
              <div>
                {/* Nav组件是头部区域 */}
                <Nav />
                {/* App组件里边是基于HashRouter展示不同的页面 */}
                <HashRouter>
                    <Switch>
                        <Route path="/" exact component={Home}></Route>
                        <Route path="/custom" exact component={Custom}></Route>
                        <Route path="/plan" exact component={Plan}></Route>
                        <Route path="/error" exact render={() => {
                            return <div>
                                <h3>错误啦 </h3>
                                <div>您所访问的页面不存在</div>
                            </div>
                        }}></Route>
                        <Redirect to="/error" />
                    </Switch>
                </HashRouter>
            </div>
```