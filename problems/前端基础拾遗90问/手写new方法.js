
// 简单三步 完成一个new操作

function myNew(exc , ...args){
    // 创建一个新对象继承 exc的原型
    let obj = Object.create(exc.prototype);
    // 执行构造函数部分 给obj赋值 
    let result = exc.apply(obj , args);
    // 对构造函数的返回值判断，如果返回的是对象 则new返回的值也是这对象 ， 
    // 否则就直接返回上面我们新建的对象
    return typeof (result) !== 'object' || result==null ? obj : result;
}


// 测试代码
function Person(firtName, lastName) {
    this.firtName = firtName;
    this.lastName = lastName;
    return { a: 11, getFullName(){return 'fuck U !'}}
}

Person.prototype.getFullName = function () {
    return `${this.firtName} ${this.lastName}`;
};

const tb = new Person('Chen', 'Tianbao');

console.log('使用原生的 new 操作符: ---');
console.log(tb);
console.log(tb.getFullName());

const sb = myNew(Person ,'Chen', 'Tianbao');
console.log('使用手写的 new 方法: ---');
console.log(sb);
console.log(sb.getFullName());
