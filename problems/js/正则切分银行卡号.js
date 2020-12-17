// 正则切分银行卡号  

// 4个数字后跟一个空格

function bankIdFormat(card){
    card = card + '';
    return card.replace(/(\d)(?=(?:\d{4})+$)/g , '$1 ');
}

console.log(bankIdFormat('622848124564578564'));