// 按照以下流程来 逐步推进 ，得到最终的ES5中最优的继承方法

function Parent(name) {
    this.name = name || '蔡徐抻'
}
// 父类的原型方法
Parent.prototype.getName = function () {
    return this.name
}


// 1. 原型链继承
// 子类
function Child() { }
Child.prototype = new Parent(); // 直接将子类的原型 指向一个 parent的实例
Child.prototype.constructor = Child;
let child = new Child();

// 缺点：  1 。 对  child.name 的修改会同步到 其他所有的Child实例，因为修改的name是原型链上的属性、
            // 2。 无法向 Parent传参 ，就是没有执行super()
// 这俩缺点都是因为没有调用 parent 构造函数 ， 把里面的this.XXX 复制给 Child实例 。 

// 2. 构造函数 继承
function Child() {
    Parent.call(this, 'zhangsan')   // 执行父类构造方法并绑定子类的this, 使得父类中的属性能够赋到子类的this上
}
// 这样解决了上面的1 ，2 问题 但是又没有原型链的继承 。所以下面将两者结合

// 3. 组合继承
function Child() {
    Parent.call(this, 'zhangsan')   // 执行父类构造方法并绑定子类的this, 使得父类中的属性能够赋到子类的this上
}
Child.prototype = new Parent(); // 直接将子类的原型 指向一个 parent的实例
Child.prototype.constructor = Child;
let child = new Child();
// 这个方法其实已经足够完善了， 但是又个小改进点 ， 这个过程执行了两次 Parent 方法 
// 一次是当成构造函数执行 一次是new 操作符  还能在精简点

// 4 寄生式 组合继承
function Child() {
    Parent.call(this, 'zhangsan') 
}
Child.prototype = Parent.prototype; 
Child.prototype.constructor = Child;
// 这样就会有个新的问题 ， 对Child原型的修改 会同步到 Parent的原型 。 
// 在优化一下
function Child() {
    Parent.call(this, 'zhangsan')   
}
Child.prototype = Object.create(Parent.prototype);  // 做一个浅拷贝
Child.prototype.constructor = Child;


// 这种寄生组合继承 是目前最成熟的继承方案 babel对ES6继承的转化也是使用了寄生组合式继承

