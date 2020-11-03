// 实现一个秒表计时器的程序

/**
 * @param {Number} sec 需要倒计时的秒数
 * @param {function} cb 每次倒计时的回调函数
 */
function timeTick(sec , cb){
    let countTimer = setInterval(()=>{
        sec--;
        cb && cb(sec);
        if(sec<=0){
            clearInterval(countTimer);
        }
    },1000)
}

timeTick(10,function(sec){
    console.log(sec);
    
})