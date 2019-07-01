// function createElement(type,props,children){
//     props = props || {};
//     let news_obj = {
//         type:null,
//         props:{
//             children:""
//         },
//         ref:null,
//         key:null
//     };

//     "key" in props? (news_obj.key = props.key,props.key=undefined):null;
//     "ref" in props? (news_obj.ref = props.ref,props.ref=undefined):null;
    
//     return {
//         ...news_obj,
//         type,
//         props:{...props,children}
//     };
// }


// let obj = createElement("h1", {className: "box"},"hhj")

// console.log(obj)
/*
    obj={
        type:'h1',
        props:{

        },
        ref:,
        key:,
        __proto__:Object.prototype
    }
 */


/*
let k = "asd"
let obj = {[k]:123}
 */
//  function _defineProperty(obj, key, value) {
//       if (key in obj) {
//            Object.defineProperty(obj, key,
//             { 
//                 value: value, 
//                 enumerable: true, 
//                 configurable: true, 
//                 writable: true 
//                 }); 
//         } else {
//              obj[key] = value;
//             } 
            
//         return obj;
//      }
// var k = "asd";
// var obj = _defineProperty({}, k, 123);



function render(obj,container,callback){
    let {type,props} = obj;
    let newElement = null;
     newElement = document.createElement(type);
    if(props.children instanceof Object){
        for(let attr in props){
            //遍历属性是从自身开始，然后再到原型链上遍历
            if(!props.hasOwnPorperty(attr))break;
            if(!props[attr])continue;
            if(attr === "className") {
                attr = "class";
                newElement.setAttribute(attr,props[attr])
                continue;
            }
            if(attr === "style"){
                if(attr==="")continue;
                for(let cssAttr in props[attr]){
                    if(props[attr].hasOwnPorperty(cssAttr)){
                        //这里存在性能影响
                        //可以改为使用ele.style.cssText
                      newElement.style[cssAttr] = props[attr][cssAttr];
                    }
                }
                continue;
            }
            newElement.setAttribute(attr,props[attr])
        }
        render(props.children,newElement,null)
    }else{
        if(typeof props.children == "string"){
                newElement.innerHTML = props.children;
                container.appendChild(newElement)
            }else{
                container.appendChild(newElement)
            }
    }
    callback&&callback()
}

render({type: 'h1',
        props: { className: 'box', children: 'hhj' },
        ref: null,
        key: null },document.getElementById("root"),()=>{
        console.log(123)})