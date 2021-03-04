// 串行 异步操作  将多个异步 同步按顺序执行



// 方法1  ： 使用 async await  简洁明了
// async function runInLine(myPromises) {
//     for (let value of myPromises) {
//         await value();
//     }
// }

// 方法二  使用 数组的 reduce 
function runInLine(array){
    if(array.lengthg===0){return};
    array.reduce((prev , next)=>{
        return prev.then(next)
    }, Promise.resolve())
    // Promise.resolve() 作为 reduce 的第一个初始prev 以避免 第一轮循环中prev 不是promise 而报错
}

const createPromise = (time, id) => () =>
    new Promise(solve =>
        setTimeout(() => {
            console.log("promise", id);
            solve();
        }, time)
    );

runInLine([
    createPromise(3000, 1),
    createPromise(2000, 2),
    createPromise(1000, 3)
])
