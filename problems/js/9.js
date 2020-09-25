// 数组去重的方法 

// 一维数组
 // --- for 循环
function duplicate(array){
    let res = [];
    array.forEach(val=>{
        if(res.indexOf(val)<0){
            res.push(val);
        }
    })
    return res;
}

 // 利用 set 自动去重的原理
 function duplicate(array){
     return [...new Set(array)];
 }

// 二维数组 
function duplicate2(array){
    let res = [];
    let strArr = [];
    array.forEach(val=>{
        let valStr = val.join(",");
        if(strArr.indexOf(valStr)<0){
            strArr.push(valStr);
            res.push(val);
        }
    })
    
    return res;
}

// 多维数组 去除所有相同的数字 返回一个一维数组     
function duplicateAll(array){
    // return [...new Set(array.flat(Infinity))];       // **兼容性不好（opera,ie浏览器，低版本的node）**
    return [...new Set(flat(array , Infinity))];
}
// 实现一个自定义的flat方法 
function flat(array , index){
    let res = [];
    if (index === 0 || !Array.isArray(array)){
        return array;
    }
    array.forEach(val=>{
        if(Array.isArray(val)){
            res.push(...flat(val,index-1));
        }else{
            res.push(val)
        }
    })
    return res;
}

// 直接遍历 递归 深度优先
function duplicateAll2(array , res=[]){
    array.forEach(val=>{
        if(Array.isArray(val)){
            res = duplicateAll2(val,res);
        }else{
            if(res.indexOf(val)<0){
                res.push(val);
            }
        }
    })
    return res;
}

// console.log(flat([[1, 2, 3, 4, 5], [[1,[2],3,4], 2, 3, 4, 5]] , 11));


// console.log(duplicate([1, 2, 3, 4, 4, 41, 3, 1, 2, 3, 32, 1]));
// console.log(duplicate2([[1, 2, 3, 4], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5], , [1, 2, 3, 4], ['3', '2', '1']]));
console.log(duplicateAll([[1, 2, 3, 4], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5], , [1, 2, 3, 4], ['3', '2', '1']]));
console.log(duplicateAll2([[1, 2, 3, 4], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5], , [1, 2, 3, 4],['3','2','1'] ] , []));