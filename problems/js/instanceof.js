// 实现一个 instanceof 

function _instanceof(target , type){
    if (typeof target !== 'object' || target === null){
        return false;
    }else{
        let proto = Object.getPrototypeOf(target);
        // 一直往深处 遍历 看原型链上是否存在这 type 这个原型
        while(true){
            if(proto === null){
                return false;
            }
            if(proto === type.prototype){
                return true;
            }
            proto = Object.getPrototypeOf(proto);
        }
    }
}

function Person (){}
let a = new Person();
function Man(){}
Man.prototype = new Person();
let b = new Man();


console.log(_instanceof(a, Person));
console.log(_instanceof(b, Man));
