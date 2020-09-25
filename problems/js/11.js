// 获取数组最大值 最小值 

// 1 遍历 缓存最大值和最小值 
function getMax_Min(arr){
    let min = Infinity;
    let max = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]>max){
            max = arr[i];
        }        
        if(arr[i]<min){
            min = arr[i];
        }
    }
    return [min , max];

}

// 利用Math.max .min 
function getMax_Min(arr){
    return [
        Math.min.apply(null,arr),
        Math.max.apply(null,arr),
    ]
}

console.log(getMax_Min([12,3,4,5,43,32,432,53,4,23]));

