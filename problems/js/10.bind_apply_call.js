// 实现一个 bind 方法 
// bind 需要返回一个 函数 延迟调用
Function.prototype._bind= function(context){
    let args = Array.from(arguments).slice(1);
    return ()=>{
        return this.apply(context, args.concat(...arguments));
    }
}
// 
function add(h){
    return this.i+this.j+h;
}
let bindedAdd = add._bind({i:1,j:3} , 4);
console.log('bind前:', add(1));  // NaN
console.log('bind后:', bindedAdd());    // 8  1+3+4


console.log('============================');


// 实现一个 apply 
Function.prototype._apply = function(context){
    let args = Array.from(arguments)[1];
    
    context.func = this;
    let res = context.func(...args);
    delete context.func;
    return res;
}

console.log('apply前:', add(1));  // NaN
console.log('apply后:', add._apply({ i: 1, j: 3 }, [4]));    // 8  1+3+4


console.log('============================');

//  call 方法 和 apply方法 类似 就是 参数不同
