let array = [2,1,3,5,6,4,77,33];

// 1.冒泡排序
// 每次循环都把剩下的最大的数往后面挪动

function bubble(array){
    array = array.slice();
    for(let i = 0 ;i<array.length;i++){
        for(let j = 0 ; j<array.length - i - 1;j++){
            if(array[j] > array[j+1]){
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}
console.log('正常的冒泡排序',bubble(array));
// 冒泡排序 -- 优化
function bubble_2(array) {
    array = array.slice();
    for (let i = 0; i < array.length; i++) {
        let hasChange = false;
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
                hasChange = true;
            }
        }
        if(!hasChange){
            break;
        }
    }
    return array;
}
console.log('优化后的冒泡排序',bubble_2(array));


// 2. 快速排序
// 原理： 取一个基数 ，比基数大的放右边，小的放左边，获得两个数组，两个数组再做同样的操作
// 快排是最常用的排序方法 虽然时间复杂度不是最低 但是综合情况下效率最高
function quickSort(array){
    array = array.slice();
    if (array.length<=1){return array}
    // 去一个基数 随意 
    let pivot = 0; // 就去第一个数 
    let pivotVal = array.splice(pivot , 1)[0];
    let left = [], right = [];

    array.forEach(val=>{
        if(val>pivotVal){
            right.push(val);
        }else{
            left.push(val);
        }
    })
    return [...quickSort(left), pivotVal , ...quickSort(right)];
}
console.log('快速排序：', quickSort(array));

//V8引擎 Array.sort() 方法 在数组元素<=10 的时候使用插入排序 大于10个时采用的是快速排序。
// 不同的浏览器 对于sort的实现方法也不一样

// 3.选择排序 
// 选择排序和冒泡排序类似 ， 每一次遍历把剩余数中最小的值 放在最左边 
function selectSort(array){
    array = array.slice();
    for (let i = 0 ;i<array.length;i++){
        let minIndex = i;
        for(let j = i+1 ;j<array.length;j++){
            if(array[j] < array[minIndex]){
                minIndex = j;
            }
        }
        let temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp;
        
    }
    return array;
}
console.log('选择排序：', selectSort(array));


// 4。插入排序
// 类似扑克牌 抓牌的过程
function insertSort(array){
    array = array.slice();

    for(let i = 1 ;i<array.length;i++){
        let j = i-1;
        let curr = array[i];
        while(j>=0 && curr < array[j]){
            array[j+1] = array[j];
            j--;
        }
        array[j+1] = curr;
    }
    return array;
}
console.log('插入排序：', insertSort(array));



