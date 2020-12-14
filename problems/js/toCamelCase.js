// 转换成 驼峰法 

function toCamelCase(str){
    if(typeof str !=='string'){
        throw new Error('传参不是字符串');
    }

    return str.split('-').map(val=>{
        return val.slice(0,1).toUpperCase() + val.slice(1);
    }).join('');
}

function toCamelCase2(str) {
    if (typeof str !== 'string') {
        throw new Error('传参不是字符串');
    }

    return str.replace(/\-\w/g , function(m){
        return m.slice(1).toUpperCase();
    })
}


let str = 'fuck-you-all!';
console.log(toCamelCase2(str));