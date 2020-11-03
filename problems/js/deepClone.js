//  深拷贝
/**
 * 实现思路 
 * 1. 先假设全是json对象 
 * 2. 兼容数组 
 * 3. 兼容其他特殊的对象  date  regexp function 
 * 4. 兼容 对象内部 引用自身
 * 
 */
function deepClone(obj){
    let types = [
        '[object Date]',
        '[object RegExp]',
        '[object Function]',
    ]
    let result = Array.isArray(obj)?[]:{};
    for(var key in obj){
        let val = obj[key];
        if(typeof val === 'object'){
            let type = Object.prototype.toString.call(val);
            if (types.indexOf( type ) >=0 ){ // 如果是一些特殊对象 function Date 直接复制
                result[key] = val;
            }else{
                result[key] = deepClone(val);
            }
        }else{
            result[key] = val;
        }
    }
    return result;
}

// 测试对象 
let exam = {
    name:'lqq',
    age:25,
    skill: ['js', 'css', 'html', 'node'],
    frineds:{
        one:'aaa',
        two:'bbb'
    },
    birth:{
        date: new Date('1995-09-15')
    }
};
exam.self = exam;

// 测试数组
let arr = [
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
]

let copyedExam = deepClone(exam)
console.log('copy前：', exam);
console.log('copy后：', copyedExam);
exam.frineds.one = 'wqq';
exam.skill[0] = 'wqq';
exam.birth.date = new Date('2000-02-01')
console.log('==========修改 frineds.one：wqq==========');
console.log('源对象：', exam);
console.log('coped对象：', copyedExam);
