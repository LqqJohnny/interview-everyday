// 解析 url中的参数
// 需要处理 默认值 + 重复字段名转数组 + 中文解码 
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

let url = 'http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled';

console.log(parseParam(url));
