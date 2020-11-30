Function.prototype._apply = function(obj , args){
    if(typeof obj !== 'object'){
        obj = window;
    }
    let fn = Symbol('fn');
    obj[fn] = this;
    let result = obj[fn](...args);
    delete obj[fn];
    return result;
}

function fuck (me){
    console.log(me + ' fuck you !'+ this.name);
}
var name = 'wqq';
fuck('q');
fuck.apply({ name: 'lqq' }, ['qqq'])