
// 使用正则 实现千分位 ， 对数字加上逗号 。

 
// 直接使用 Number 的 toLocaleString
function numFormat(num){
    return num.toLocaleString();
}

//  使用正则
function numFormat2(num) {
    // 如果有小数
    let arr = String(num).split('.');
    // 整数部分
    let left = arr[0];
    let right = arr[1] || '';
    // 对left 整数部分做 正则处理
    left = left.replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
    return right ? left + '.' + right : left ;
}



console.log(numFormat2(100000001));