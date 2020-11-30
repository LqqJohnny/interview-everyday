Function.prototype._call=function(obj , ...args){
    if(typeof obj !== 'object'){
        obj = window;
    }
    let fn = Symbol('fn');
    obj[fn] = this;
    let result = obj[fn](args);
    delete obj[fn];
    return result;
}

function fuck(){
    console.log('fuck you ! '+ this.name);
}
var name = 'wqq';
fuck();
fuck.call({name:'lqq'})
