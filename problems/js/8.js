// 写一个获取当前url查询字符串中的参数的方法 

// 直接用 split 对字符串进行拆分
function getQueryParam( url ){
    let res = {};
    url.split('?')[1].split('&').forEach(val=>{
        let arr = val.split('=');
        res[arr[0]] = arr[1];
    })

    return res;
}

// 使用 replace 的处理函数 和 正则
function getQueryParam( url ){
    let res = {};
    url.replace(/([^?&]+)=([^?&]+)/g,function(m , s1 ,s2){
        console.log(m ,s1,s2);
        
        res[s1] = s2;
    })
    
    return res;
}


console.log(getQueryParam('http://www.baidu.com?facu=ds&ww=123&json={s:"2"}'));
