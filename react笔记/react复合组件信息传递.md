
#什么是复合组件
```
    把一个组件嵌套在另一个组件中的形态我们称为复合组件,也可以说是父组件嵌套子组件
```

#什么是平行组件
```
    平行组件又称为兄弟组件或者说是两个毫无关系的组件
```

#复合组件传递信息的方式
```
    传递信息的方式：
        1、父组件需要把信息通过属性传递给子组件
            调用子组件的时候，父组件直接把信息通过属性传递给子组件(子组件props中存在父组件传递过来的信息)。但是这种方式只能父组件把信息传递给子组件，子组件无法直接的把把信息传递给父组件，也就是属性传递信息是单向的。即**属性传递**
            *注意：子组件不能调用父组件*

        2、基于*上下文传递信息*
            父组件基于上下文传递信息给子组件，父组件需要做的事前准备：
                1、设置子组件上下文类型(即传递给子组件的信息类型)，设置的上下文类型的属性是(childContextTypes)，这个是固定的语法：
                    static childContextTypes={

                    }

                    注意：
                        这个设置子组件上下文类型要依赖prop-types模块，使用前务必先安装
                            yarn add prop-types
                    
                    举例：
                    static childContextTypes = {
                        anum: PropTypes.number,
                        bnum: PropTypes.number
                    }
                2、定义一个函数获取子组件的上下文(即设置子组件的上下文)
                    这个获取子组件的上下文为一个函数，这个函数名也是固定的，叫getChildContext。
                        注意：
                            这个函数必须返回一个对象，对象中包含你要传递给子组件的信息
                        
                        举例：
                        getChildContext() {
                            return {
                                anum: this.props.count.anum,
                                bnum: thi.props.count.bnum
                            }
                        }
            子组件应该做的事前准备：
                1、子组件定义要接受的上下文数据类型，只有定义了这上下文类型才能接受组件通过上下文传递过来的信息，定义接受这个上下文数据类型的属性是contextTypes。
                举例：
                    static contextTypes = {
                        anum: PorpTypes.number,
                        bnum: PorpTypes.number
                    }
                2、使用上下文，直接在constructor()方法中增加一个参数context就行，然后直接使用即可，当然可以传递给React.Component类，进行context私有化.
                    console.log(this.context)

                注意：
                    1、子组件在定义上下文类型时，可以按需定义，如果按需定义代表着按需导入父组件通过上下文传递给子组件信息。但是不能一个也不写
                    2、父组件传递通过上下文传递给子组件的信息的类型必须和父组件需要传递给子组件信息定义的类型必须相同，否则报错
```

#总结上下文传递信息
```
    1、上下文传递信息：父组件先把需要给后代组件(包括子孙组件等)的信息设置好类型。已经提供一个方法将父组件传递的信息信息存入进上下文中，后代组件需要用到父组件信息时，主动去父组件调取使用即可。主动调取的方式就是在子(孙)组件中定义需要从父组件中获取数据的类型即可。
    2、父组件定义的上下文，不仅子组件可以调取，子孙组件等也可以，只需定义需要的信息的类型即可
```

#基于属性传递信息 VS 基于上下文传递信息对比
```
    1、属性操作起来简单，子组件是被动接受传递的值(子组件内属性是只读的)，只能父组件传递给子组件(子组件不能传递给父组件，父组件传递给孙子组件也需要做一些处理)
    2、上下文传递信息操作起来比较复杂，子组件是主动获取信息的(子组件是可以修改获取到的上下文信息的，但是子组件的修改不会影响到父组件中的信息，其他组件也不受影响)，一旦父组件上设置了上下文信息，它后代组件都可以直接拿来用，不需要一层一层的传递
```


#子或者孙组件修改父组件中的信息
```
    1、利用回调函数函数的机制
        父组件把一个函数通过属性或者上下文的方式传递给子组件或者子孙组件，而子组件或者子孙组件只需将这个方法得到并且在适当时机执行即可(也就是子组件中执行父组件的方法，还可以传递一些值过去，但是这需要父组件将其方法定义好传参)，这样父组件的这个方法中，想把自己的信息改成什么样子就改成什么样子
```


#关于上下文中特殊的方法getChildContext的一些使用注意
```
    只要render函数重新渲染， 就会重新执行getChildContext这个方法，重新更新父组件的上下文信息，果父组件上下文信息更改了，子组件在重新调取的时候，会使用最新的上下文信息。因此父组件中关于constructor方法、render方法、getChildContext方法执行先后顺序：constructor方法->render方法->getChildContext方法。但是只要render执行了，getChildContext方法都会执行
```

#平行组件传递消息的方法
```
    解决方法：
        1、让两个平行组件拥有相同的父组件
            父组件parent，子组件有A组件和B组件。父组件中有一些信息，父组件把一个方法传递给A，A把方法执行了(方法中执行修改组件信息值)，父组件再把最新的消息传递给B即可，等价于A的操作影响了B
        
        2、基于redux来进行状态管理，实现组件之间的信息传递(经常使用的方案)
```

#关于redux基础
```
    redux可以应用于任何项目中(包括vue、jquery、react都可以)，react-redux才是专门为react设计的一套方案

    *基于redux可以实现任何组件之间的信息传递*
```