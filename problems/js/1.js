// 题目：  用递归算法实现，数组长度为5且元素的随机数在2 - 32间不重复的值

// for循环
function generateRandom(n){
    let arr = [];
    for(let i = 0 ;i<n;i++){
        let num = Math.floor(Math.random() * 30)+2;
        if (arr.indexOf(num)>-1){
            i--;
        }else{
            arr[i] = num;
        }
    }
    return arr;
}

// 递归
function generateRandom(arr , n) {
    if(n>0){
        let num = Math.floor(Math.random() * 30) + 2;
        if(arr.indexOf(num)>=0){
            return generateRandom(arr , n);
        }else{
            return generateRandom(arr.concat([num]), n-1);
        }
    }else{
        return arr;
    }
}

// while 循环
function generateRandom(n){
    let arr = [];
    while(arr.length<n){
        let num = Math.floor(Math.random() * 30) + 2;
        if(arr.indexOf(num)===-1){
            arr.push(num);
        }
    }
    return arr;
}
console.log(generateRandom( 5));