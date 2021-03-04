// 使用 setTimeout 实现一个 setInterval 

function mySetInterval(func , time){

    let timer = null ;
    (function init(){
        timer = setTimeout(() => {
            func();

            clearTimeout(timer);
            timer = null;

            init();
        }, time);
    })()
    
    return {
        clear : function(){
            clearTimeout(timer);
            timer = null;
        }
    };

}

let timer = mySetInterval(function(){
    console.log(1);
} , 1000);

setTimeout(()=>{
    console.log('清除定时器： ' , timer);
    timer.clear();
},10000)


