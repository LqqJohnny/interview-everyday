
// 前端拦截 xss 攻击 
// 对输入字符串 做转义

function xssFilter(str){
    let result = '';
    for(let i = 0 ;i<str.length;i++){
        switch (str.charAt(i)) {
            case '<':
                result +="&lt;";
                break;
            case '>':
                result +="&gt;";
                break;
            case '"':
                result +="&quot;";
                break;
            case '\'':
                result +="&apos;";
                break;
            case '%':
                result+="%";
                break;
            case ';':
                result+=";";
                break;
            case '(':
                result+="(";
                break;
            case ')':
                result+=")";
                break;
            case '&':
                result +="&amp;";
                break;
            case '+':
                result+="+";
                break;
            default:
                result+=(str.charAt(i));
                break;
        } 
    }
    return result;
}


console.log( xssFilter('<script>alert("fuck you!")</script>') );
