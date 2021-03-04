// leetcode 11 题 盛水最多的容器  返回最大的面积

// 核心思想  ---  贪心 
/**
 * @param {number[]} height
 * @return {number}
 */
function MaxContainer(array){
    if(array.length<=1){
        return 0;
    }
    let maxArea= 0 ;
    let left  = 0 , right = array.length-1; 

    while(left < right){
        let _area = Math.min(array[left], array[right]) * ( right - left );
        if (_area > maxArea){
            maxArea = _area;
        }
        if (array[left] > array[right]){
            right--;
        }else{
            left++;
        }
    }
    return maxArea;
}

console.log(MaxContainer([1, 8, 6, 2, 5, 4, 8, 3, 7]));