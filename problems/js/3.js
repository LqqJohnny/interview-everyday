//  去除字符串中最后一个指定的字符 

// 调用多个数组的方法
function deleteWordInStr(str , word){
    let arr = str.split('');
    let idx = arr.lastIndexOf(word);
    arr.splice(idx,1).join('');
    return arr.join('');
}

// 直接一个for循环 
function deleteWordInStr(str , word){
    let res = '';
    let hasdelete = false;
    for(let i = str.length-1;i>=0;i--){
        if (str[i] === word && !hasdelete){
            hasdelete = true;
        }else{
            res = str[i] + res;
        }
    }   
    return res;
}


console.log(deleteWordInStr('abbbbbbabbba1' , '1'));