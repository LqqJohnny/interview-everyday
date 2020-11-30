// 实现一个 new 

function _new(ctor , ...args){
    if(typeof(ctor) !== 'function'){
        throw new TypeError('类型错了');
    }
    // 以 传参的prototype 作为原型，创建一个空对象。
    const obj = Object.create(ctor.prototype);
    // 在刚创建的空对象上 执行构造函数
    const res = ctor.apply(obj , args);
    // 至此已经完成 对象的创建 下面就 返回结果。
    // 判断构造函数执行返回的结果是否是引用数据类型，若是则返回构造函数执行的结果，否则返回创建的obj
    const isObject = typeof res === 'object' && res !== null;
    const isFunction = typeof res === 'function';
    return isObject || isFunction ? res : obj;


}

// ---end---

function Person(name , age){
    this.name = name;
    this.age = age;
}
Person.prototype.country = 'China';
let p = _new(Person, 'lqq', '18');
console.log(p);
console.log(p.country);
