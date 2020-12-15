// 解析 url中的参数
// 需要处理 默认值 + 重复字段名转数组 + 中文解码 

// 方法1 ： 字符串处理
function parseParam(url){
    let parasmObj =  {}
    let paramStr = url.split('?')[1];
    let paramKeyVal = paramStr.split('&'); //  key=value
    paramKeyVal.forEach(val=>{
        let _arr = val.split('=');
        let key = _arr[0];
        let value = _arr.length==1? true : decodeURIComponent(_arr[1]);
        if (parasmObj.hasOwnProperty(key)){
            if (parasmObj[key] instanceof Array){
                parasmObj[key].push(value);
            }else{
                parasmObj[key] = [parasmObj[key] , value];
            }
        }else{
            parasmObj[key] = value;
        }
    })
    return parasmObj;
}


// 方法2 ：  正则  
// 不能设置默认值
function getQuery(url){
    var params = {};
    // var regex = /[\?&]([a-zA-Z_]+)=([\w\-\.\%]*)/g;
    var regex = /([^&?=]+)=([^&?=]+)/g;
    url.replace(regex , function(...args){
        /**
         *  agrs 参数  是一个数组 包含匹配到的数据
         *  0  匹配到的整个 key=value 字符串
         *  1 键值对中的 key
         *  2 键值对中的 value 
         *  3 键值对字符串 开始的index 
         *  4 原完整字符串
         *  */ 
        let key = args[1];
        let value = args[2] || true;
        if(key in params){
            if ( Array.isArray(params[key]) ){
                params[key].push(decodeURIComponent(value));
            }else{
                params[key] = [params[key], decodeURIComponent(value)];
            }
        }else{
            params[key] = decodeURIComponent(value);
        }
        
    })
    
    return params;
}

let url = 'http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled';

// console.log(parseParam(url));
console.log(getQuery(url));
