// 实现一个 go 函数 
// go("1")  // go1
// go()("1")  // goo1
// go()()("1")  // gooo1

function go(word){
    let words = 'go';
    
    function fn(w) {
        if(!w){
            words += 'o';
            return fn;
        }else{
            return words+w;
        }
    }
    
    if (!word) {
        words+='o';
        return fn;
    } else {
        return words+word;
    }
}

console.log(go('1'));