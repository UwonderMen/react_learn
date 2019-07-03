#es6中的class
```
    es6中定义类：
        class parent{
            constructor(x,y){  //contructor是给实例设置私有属性
                this.x = x;
                this.y = y;
            }
            render(){ //在类的原型上挂在一个render方法
                //函数体
            }
            //挂在到组件类上的一个静态方法，类似于parent.ajax = function(){}
            static ajax(){

            }
        }
    
    es6中的类定义方法注意：
        1、es6创建的大括号中只能写方法，而且这个方法不能是箭头函数的方法
        2、实例的属性需要自己额外拿到类定义外边设置，如下设置：
            类.prototype.属性=属性值
        3、类的静态属性也只能拿到外边设置，设置如下：
            类.属性 = 属性值
    
    ***
        但是，注意了，react本身定义类的写法是不符合es6规范的，为什么react可以像上面注意事项中那样写呢？
            因为，webpack在打包时，将这些类中定义为static的属性，在打包时都会使用打包插件babel-preset-react-app把这些静态属性或者静态方法转换成定义在类上，如:
                组件定义为下面：
                class Model extends React.Component {
                //静态属性
                static defaultProps = {
                    title: "adadasdas",
                    red: {
                        backgroundColor: "green"
                    }
                }
                constructor(props, context, updater) {
                    super(props, context, updater)
                }
                render() {
                    let { red, title } = this.props
                    return <div>
                        <h3 style={red}>{title}</h3>
                    </div>
                }
            }

            打包后：
                class Model extends React.Component {
               
                constructor(props, context, updater) {
                    super(props, context, updater)
                }
                render() {
                    let { red, title } = this.props
                    return <div>
                        <h3 style={red}>{title}</h3>
                    </div>
                }
            } 
            Model.defaultProps = {
                    title: "adadasdas",
                    red: {
                        backgroundColor: "green"
                    }
                }

        注意：es6本身不支持在类中定义箭头函数或者直接在类中定义属性或者静态属性，但是react却可以，是因为webpack打包时，使用babel-preset-react-app进行转换
    ***
```

#es6的继承
```
    语法：
        class 子类 extends 父类{
            constructor(){
                super()//调用这个方法相当于调用 *父类.constructor.call(this)*,执行完后，子类就具有父类的私有属性，如果想初始化父类中定义的属性，可以在调用super()时传递参数super(this,参数1，参数2....)这样相当于执行 *父类.constructor.call(this,参数1，参数2...)*

            }
        }
    
    **
        继承的总结:
            1、由于继承时需要调用super()方法，那么子类就具有父类的一些私有方法
            2、子类只能继承父类原型中方法和属性，和父类实例上的私有属性和方法，对于父类作为对象设置的静态属性和方法是无法继承的
    **

```