// 首先定义 promise的三个 状态
const PENDING = 'pending';      //  等待中
const FULFILLED = 'fulfilled';  //  执行中
const REJECTED = 'rejected';    //  已拒绝

function Promisee(executor){
    // 初始化
    let _this = this;
    this.state = PENDING;
    this.onFulfilledFunc = [];
    this.onRejectedFunc = [];
    this.value = undefined; // 成功结果
    this.reason  = undefined;   // 失败原因
    // 成功的回调
    function resolve(value){
        if (_this.state === PENDING){
            console.log('resolve函数 可以执行 ， value:' , value);
            _this.value = value;
            _this.state = FULFILLED;
            _this.onFulfilledFunc.forEach(fn => {
                fn(value);
            });
        }
    }
    // 失败的回调
    function reject(error){
        if (_this.state === PENDING){
            console.log('reject函数 可以执行 ， 拒绝原因:', error);
            _this.state = REJECTED;
            _this.reason = error;
            _this.onRejectedFunc.forEach(fn => {
                fn(error);
            });
        }
    }
    // executor 是创建promise时的执行函数，立即执行并传入res,rej两个函数
    // executor 有可能执行异常 ， try/catch 一下
    try {
        executor(resolve, reject);
    } catch (error) {
        reject(error);
    }
    // return 一个 promise 

}

Promisee.prototype.then = function(onFulfilled , onRejected){
    // 在 then 函数里面 需对promise的状态 来执行对应的函数
    if(this.state === FULFILLED){
        if (typeof onFulfilled === 'function'){
            onFulfilled(this.value);
        }
    }
    else if (this.state === REJECTED) {
        if (typeof onRejected === 'function') {
            onRejected(this.reason);
        }
    }else{
        // 如果调用then的时候 还是pending状态说明promise执行函数中有异步函数
        // 所以先将回调函数存入数组 ， 等promise状态变化的时候统一调用
        if(typeof onFulfilled === 'function'){
            this.onFulfilledFunc.push(onFulfilled)
        }
        if (typeof onRejected === 'function') {
            this.onRejectedFunc.push(onRejected)
        }
    }

}

// 测试 代码
let p = new Promisee(function(res , rej){
    console.log('立即执行');
    setTimeout(()=>{
        res(1);
    },1000)
}).then(function(val){
    console.log('then 里面的 resolve 获取到了 value :' , val);
    
},function(e){
        console.log('then 里面的 reject 失败原因 error :', e);
})