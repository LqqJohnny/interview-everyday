// 手写一个 bind方法 

Function.prototype._bind = function( ex , ...args){

    ex = ex || window;
    let _args = args;
    function _fn(...args_fn){
        // 整合参数
        let args_all = [...args_fn, ..._args];
        _fn.apply(ex , args_all);
    }

    return _fn();
}

function fuck(who , target){
    console.log(this.name+' says : '+who + ' fuck '+ target);
}

let obj = {
    name:'god'
}
let a = fuck.bind(obj)
a('lqq','wqq')