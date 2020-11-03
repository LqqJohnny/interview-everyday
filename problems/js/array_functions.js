// 实现 数组 的  各个方法 



// filter
Array.prototype.myFilter = function(fn){
    let ret = [];
    for(let i = 0 ;i<this.length ; i++){
        if(fn(this[i] , i , this)){
            ret.push(this[i]); 
        }
    }
    return ret;
}


