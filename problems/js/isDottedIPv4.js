// 判断是否是 有效的 ipv4 地址 

// 有效的 ipv4 地址 分为四段 每段用 . 分割 而且每段的数字 不能超过255 
// 而且如果大于一位的话 ，不能以0 开头 例如 不能是 03.03.03.11
// 但是可以是 127.0.0.1

function isDottedIPv4(ip){
    let arr = ip.match(/^(\d+)\.(\d+)\.(\d+)\.(\d+)/);
    return arr.length > 0 && arr.slice(1,5).every(val => { 
        return Number(val) <= 255  && !(
            val.length > 1 && val[0]=='0'
        )
    })

}

let ip = '127.122.0.1';

console.log(isDottedIPv4(ip));