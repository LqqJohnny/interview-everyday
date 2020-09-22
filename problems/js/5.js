// 将字符串中的字母 大写转小写 小写转大写

// 正则 配合 replace 的处理函数 
function upper_lower( str ){
    return str.replace(/([a-z]*)([A-Z]*)/g , function(m , s1 ,s2){
        console.log(m, 's1: ', s1, 's2:', s2)
        return s1.toUpperCase() + s2.toLowerCase();
    })
}


// 循环 判断当前字符和toUpperCase 之后是否相等 ， 是则表示现在是大写，需要转小写，否则就转大写
function upper_lower1( str ){
    let res = '';
    for(let i = 0 ;i<str.length;i++){
        let word = str[i];
        if(word === word.toUpperCase()){
            res += word.toLowerCase();
        }else{
            res += word.toUpperCase();
        }
    }
    return res;
}

console.log(upper_lower('aSsd__EQW_dsd__dsdas_12_dDa'));

/***
 *   扩展  ：  使用replace 将每个单词的首字母变成大写
 */

 function upperFirstWord( str ){
    return str.replace(/(\b(\w)) | \s\b(\w)/g , )
 }

console.log('首字母转大写：', upperFirstWord('i am your daddy'));
 


