// 写一个判断数据类型的方法

function getType(obj){
    let type = typeof(obj);
    if (type !=='object'){
        return type;
    }else{
        if(Array.isArray(obj)){
            return 'array';
        }else{
            return 'object';
        }
    }
}

console.log(getType({}));
