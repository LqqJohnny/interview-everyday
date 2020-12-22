// 计算个税 累积税率 

/**
 * 
 * 
 * 
 */

 let json = [
     { max:36000,rate: 0.1 } , 
     { max: 70000, rate: 0.2 }, 
     { max: 100000, rate: 0.3 }, 
     { max: Infinity, rate: 0.5 }, ]

function getRateMoney(total , json){
    let index = 0 ;
    let rateMoney = 0;
    let min = 0;
    while(true){
        if (total >= json[index].max){
            rateMoney += (json[index].max - min) * json[index].rate;
            min = json[index].max;
            index++;
        }else {
            rateMoney += (total - min) * json[index].rate;
            return rateMoney;
        }
        
    }
    return rateMoney;
}

let a = getRateMoney(190000 , json);
console.log(a);