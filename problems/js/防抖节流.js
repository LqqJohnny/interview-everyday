// 防抖    例如用户输入实时搜索，等用户输入完成之后才会发出搜索请求。 去除不必要的请求
function debounce(fn , time){
    // 用定时器去控制  每次触发事件都刷新计时器
    let timer = null;  // 闭包存储 timer 
    return function(){
        clearTimeout(timer);
        timer = setTimeout(()=>{
            fn.apply(this, arguments);
        },time);
    }
}

// 节流  某一段时间内 最多只能触发一次事件  ex: 监听页面滚动事件 图片懒加载， 瀑布流
function throttle(fn , time){
    // 定义一个标志 ， 执行方法时 设置为true 定时器中重置为false
    let flag = true;
    return function(){
        if(flag){return}
        flag = true;
        setTimeout(()=>{
            fn.apply(this , arguments);
            flag = false;
        },time);
    }
}