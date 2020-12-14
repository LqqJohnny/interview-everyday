// 实现一个 数组的 filter方法 


Array.prototype._filter = function( fn ){

    if(typeof fn !== 'function'){
        throw new Error("请传入正确的参数");
    }

    let result = [];
    let arr = this;
    for(let i = 0 ;i<arr.length;i++){
        if( fn( arr[i] , i , arr) ){
            result.push(arr[i]);
        }
    }
    return result;
}

let a = [1,2,3,54,65,6]

console.log( 
            a._filter(val=>{
                return val>=3
            }) 
        )