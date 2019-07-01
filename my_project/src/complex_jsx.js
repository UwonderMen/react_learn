function createElement(type, props, ...childrens) {
    props = props || {};
    let news_obj = {
        type: null,
        props: {
            children: ""
        },
        ref: null,
        key: null
    };
    if ("key" in props) {
        news_obj.key = props.key;
        props.key = undefined
    }
    if ("ref" in props) {
        news_obj.ref = props.ref;
        props.ref = undefined
    };
    return {
        ...news_obj,
        type,
        props: {
            ...props,
            children: childrens.length <= 1 ? (childrens[0] || "") : childrens
        }
    };
}

//--------------------------------------render
function render(obj, container, callback) {
    let { type, props } = obj;
    let newElement = null;
    newElement = document.createElement(type);
    for (let attr in props) {
        //遍历属性是从自身开始，然后再到原型链上遍历
        if (!props.hasOwnPorperty(attr)) break;
        if (!props[attr]) continue;
        switch (attr) {
            case "className":
                attr = "class";
                newElement.setAttribute(attr, props[attr])
                continue;
            case "style":
                if (attr === "") continue;
                for (let cssAttr in props[attr]) {
                    if (props[attr].hasOwnPorperty(cssAttr)) {
                        //这里存在性能影响
                        //可以改为使用ele.style.cssText
                        newElement.style[cssAttr] = props[attr][cssAttr];
                    }
                }
                continue;
            case "children":
                /*
                    children里边的值包含哪些：
                        1、可能是一个值：可能是一个字符串也可能是一个jsx对象
                        2、可能是一个数组：数组中的每一项可能字符串，也可能是一个jsx对象
                    
                        像这种有多种值的情况一般都会转成统一的情况进行处理，比如这里统一转
                        成数组来考虑,后期统一对数组进行操作
                */
                // newElement.innerHTML = props.children;
                // container.appendChild(newElement)
                props[attr] = !props[attr] instanceof Array ? [props[attr]] : null;
                props[attr].forEach((item, index) => {
                    //验证item类型
                    //1、如果是字符串，那么创建文本节点，创建后放到上一级盒子里
                    //2、如果是对象，那么创建元素节点，创建后appendChild到上一级盒子中
                    if (typeof item === "string") {
                        let textNode = document.createTextNode(item)
                        newElement.appendChild(textNode)
                    } else {
                        render(item, newElement, null)
                    }
                })
                continue
            default:
                newElement.setAttribute(attr, props[attr])
                break;
        }
    }
    container.appendChild(newElement)
    callback && callback()
}
