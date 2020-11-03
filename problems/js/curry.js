// 函数柯理化

function curryAdd(){
    let args = [...arguments];
    let fn = function(){
        args.push(...arguments);
        return fn;
    }

    fn.toString =function(){
        console.log('toString调用了');
        let res =  args.reduce((sum , cur)=>{
            return sum + cur;
        })
        return res;
    }
    return fn;
}



// let add = function(a , b){
//     return a+b;
// }

// let _add = curry(add);

console.log(curryAdd(1, 2, 3, 4)(5,6)(7,8,9));

