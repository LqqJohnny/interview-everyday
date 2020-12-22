// 雷盘数据存在一个二维数组中 
// 0 表示此处不是雷  1 表示有雷 -1   字符串 '1'  '3' 'n'表示这个格子周围有 n 个地雷 ' '表示这个格子附近没有炸弹

// 随机生成一个 雷盘 二维数组 
// x 横轴 个数  y竖轴 个数  count需要生成的雷的个数
function gerateBoomData(x, y ,count){
    let booms = [];
    for(let i=0;i<y;i++){
        booms.push(new Array(x).fill(0));
    }
    // 给雷盘增加随机的雷
    for(let j = 0 ;j<count;j++){
        let _x = randomNum(0, x);
        let _y = randomNum(0, y);
        booms[_y][_x] = 1;
    }
    return booms;
}

// 生成范围内随机的数字
function randomNum(start , end){
    return Math.ceil(Math.random() * (end - start))-1;
}

// 点击一个 格子  ，是雷则返回 false ， 不是雷则返回 周围雷的个数 
// 每一次对一个格子进行判断之后， 这个格子的内容都会变成字符串 ， 区分与未计算的格子的同时， 也相当于保存了这个格子的计算结果。
function tapOneSquare(  i , j ){
    if(i<0 || j<0){
        return false;
    }
    // 已经找过了 就直接返回 
    if (typeof booms[j][i] ==='string'){
        return;
    }
    if (booms[j][i] === 1){ // 踩炸弹 直接返回false
        booms[j][i] = 'BOOM!'
        return false;
    }
    console.log('开始找雷： ', i, j);
    // 临时存取当前节点附近的有效的节点 。 除去超出边界的。
    let nearBySquare = []; // {x:0 , y:0}
    // 判断周围的8个格子是否有雷
    let boomCount = 0;
    if (j - 1>=0 && i-1>=0){
        nearBySquare.push({x:i-1 , y:j-1});
        if (booms[j - 1][i - 1] === 1){
            boomCount++;
        }
    }
    if (j - 1 >= 0) {
        nearBySquare.push({ x: i, y: j - 1 });
        if (booms[j - 1][i] === 1) {
            boomCount++;
        }
    }
    if (j - 1 >=0 && i + 1 <= X-1) {
        nearBySquare.push({ x: i+1, y: j - 1 });
        if (booms[j - 1][i+1] === 1) {
            boomCount++;
        }
    }
    if (i - 1 >= 0 ) {
        nearBySquare.push({ x: i - 1, y: j });
        if (booms[j][i - 1] === 1) {
            boomCount++;
        }
    }
    if (i + 1 <= X-1) {
        nearBySquare.push({ x: i + 1, y: j });
        if (booms[j][i + 1] === 1) {
            boomCount++;
        }
    }
    if (j + 1 <= Y-1 && i - 1 >= 0) {
        nearBySquare.push({ x: i - 1, y: j+1 });
        if (booms[j+1][i - 1] === 1) {
            boomCount++;
        }
    }
    if (j + 1 <= Y - 1) {
        nearBySquare.push({ x: i, y: j+1 });
        if (booms[j+1][i] === 1) {
            boomCount++;
        }
    }
    if (j + 1 <= Y - 1 && i + 1 <=X-1) {
        nearBySquare.push({ x: i+1, y: j + 1 });
        if (booms[j + 1][i+1] === 1) {
            boomCount++;
        }
    }
    // 如果 boomCount = 0 表示这个附近没有任何炸弹 ， 则递归调用周边8个 格子 ，自动点开哪些空白格
    if (boomCount === 0){
        console.log("旁边没有炸弹");
        booms[j][i] = '0';
        console.log('旁边的节点有：', nearBySquare);
        nearBySquare.forEach(val=>{
            if (typeof (booms[val.y][val.x])!=='string'){
                tapOneSquare(val.x, val.y);
            }
        })
        return 0;

    }
    booms[j][i] = boomCount + '';
    return boomCount;
}

let X = 10;
let Y = 10;
// let booms = gerateBoomData(X,Y,20);
let booms = 
[   [1, 0, 1, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
    [0, 1, 0, 0, 0, 0, 1, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 1, 0, 1, 0],
    [0, 0, 0, 0, 1, 0, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 1, 0, 0, 0, 0]];
console.log('---------生成的雷盘-----------');
console.log(booms);

let x = 7;
let y = 4;
console.log(`点击 ${x} ， ${y} ：`);
tapOneSquare(x, y)
console.table(booms);

/**
 * !总结
 * 有以下几个重点： 
 * 1. 生成一个随机 雷盘
 * 2. 用二维数组来表示雷盘
 * 3. 每次校验一个格子， 就将这个格子的值设为字符串，既可以用来区分是否校验过，有可以保存这个格子的校验值用于展示。
 * 4. 当前格子附近没有雷时， 要自动往四周扩展 ，直到雷区附近。
 * 5. 只对有效的相邻格子进行校验
 * 
 */