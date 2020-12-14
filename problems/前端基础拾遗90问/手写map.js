// map 需要返回一个新数组 不修改原数组。
// 
Array.prototype._map = function(fn){
    // 先对传参做一个简单校验
    if(typeof(fn) !== 'function'){
        throw new Error('参数传入有误')
    }
    新建一个临时数组存最后的结果
    let result = [];
    let arr = this;
    // 轮询执行map传入的函数 ，结果存入result数组
    for (let i = 0; i < arr.length; i++){
        result.push(fn(arr[i] , i , arr ));
    }
    // 直接返回这个新的临时数组 ， 不修改 原数组
    return result;
}

let arr = [1,2,3,45,5];

console.log(arr._map(val=>{return val*10}));