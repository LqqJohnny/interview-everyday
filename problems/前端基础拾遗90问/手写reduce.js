// 


Array.prototype._reduce = function( fn ){

    if (typeof (fn) !== 'function') {
        throw new Error('参数传入有误')
    }

    let arr = this;
    let result = arr[0];

    for(let i =1; i<arr.length;i++){
        result = fn(result , arr[i] , i ,arr);
    }
    return result;
}


let a = [1,2,3,4,5,4,2,32];

console.log( a._reduce((prev , cur)=>{
    return prev*cur;
}));