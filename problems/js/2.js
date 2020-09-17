// 去掉给的字符串中的所有空格

// String.replace
function deleteSpace(s){
    return s.replace(/\s/g , '');
}

console.log(deleteSpace(' dasds ds adsd asdas asdadasda sdas dasd '))

// 去除首尾的 空格
function trim(s){
    return s.replace(/^\s+|\s+$/g  , '')
}
console.log('start-'+trim('   1 1 1   ') +'-end');
