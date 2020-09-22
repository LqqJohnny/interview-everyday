// 写一个方法把下划线命名转成大驼峰命名

// for循环 碰到下划线 下一个字母转大写
function toCamel( str ){
    let change=false;
    let result = '';
    for(let i = 0 ;i<str.length;i++){
        if(str[i]=== '_'){
            change=true;
        }else{
            if(change){
                result += str[i].toUpperCase();
                change = false
            }else{
                result += str[i];
            }
        }
    }  
    return result;
}

// 切分字符串 第一个字符转大写
function toCamel( str ){
    let arr = str.split('_');
    let res = '';
    arr.forEach((val,index)=>{
        if (index == 0 || val===''){
            arr[index] = val[index]
        }else{
            arr[index] = val[0].toUpperCase()+val.substr(1);
        }
    })
    return arr.join('');
}

console.log(toCamel('my___interview_p__roblems'))