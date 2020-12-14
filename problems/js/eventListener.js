// 写一个通用的事件侦听器函数

/**
 *  只是 对 原生的 事件模型做了一些封装和 兼容性处理。
    这里主要涉及到了 dom2事件模型的 四个方法 
    添加监听 
    移除监听
    阻止冒泡
    取消默认行为

 */

class EventListener{
    // 直接定义静态方法
    /**
     * 添加 监听器
     * @param {*} ele 需要添加监听事件的 dom 元素
     * @param {*} type 需要监听的事件名 如： click mouseover
     * @param {*} handler 监听函数
     */
    static addListener(ele, type , handler ){
        if (!ele || typeof (handler) !== 'function'){
            throw new Error("请传入正确的监听元素");
        }
        // 做兼容
        if (ele.addEventListener){
            ele.addEventListener(type , handler , false);
        }else if(ele.attachEvent){ // 兼容低版本的 ie 浏览器
            ele.attachEvent("on" + type, handler);
        }else{
            element["on" + type] = handler;
        }
    }

    /**
     * 移除 监听器
     * @param {*} ele 需要移除监听事件的 dom 元素
     * @param {*} type 需要移除的事件名 如： click mouseover
     * @param {*} handler 监听函数
     */
    static removeListener(ele, type, handler) {
        if (!ele || typeof (handler)!=='function') {
            throw new Error("请传入正确的监听元素");
        }
        // 做兼容
        if (ele.removeEventListener) {
            ele.removeEventListener(type, handler, false);
        } else if (ele.detachEvent) { // 兼容低版本的 ie 浏览器
            ele.detachEvent("on" + type, handler);
        } else {
            element["on" + type] = null ;
        }
    } 
    /**
     * 获取事件的目标元素
     * @param {event} ev 事件对象
     */
    getTarget(ev){
        if(!ev){
            throw new Error("请传入正确的事件对象");
        }
        return ev.target || ev.srcElement; // 兼容不同浏览器
    }
    // 获取到当前event 对象
    getEvent(ev){
        return ev || window.event;
    }

    stopPropagation(ev){
        if(ev.stopPropagation){
            ev.stopPropagation();
        }else{ // 兼容ie
            ev.cancelBubble = true;
        }
    }

    // 取消事件的默认行为
    preventDefault(ev) {
        if (ev.preventDefault) {
            ev.preventDefault();
        } else {
            ev.returnValue = false;
        }
    }
    
}