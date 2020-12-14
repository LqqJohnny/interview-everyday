// 封装cookie的方法
function CookieTool(){
    let cookie = "BAIDU_SSP_lcr=https://www.baidu.com/link?url=XAWiwz5iSxrqRTowj9AZjSQFIMOdI5N5w44nrJjIIu9iywZKgzAnHQnv46EVK9W3R4rkgbnWVFh7LdCMunGia5X6QbgGBlLH8J0ZbyguBq_&wd=&eqid=b20273a500006af8000000065fcf1fd7; uuid_tt_dd=10_4555378860-1582117467456-136738; Hm_ct_6bcd52f51e9b3dce32bec4a3997715ac=6525*1*10_4555378860-1582117467456-136738; Hm_lvt_e5ef47b9f471504959267fd614d579cd=1586325294; Hm_ct_e5ef47b9f471504959267fd614d579cd=6525*1*10_4555378860-1582117467456-136738; __yadk_uid=FNrtpJYSzJVCi61icJP6qdsVjWLqySj2; Hm_up_6bcd52f51e9b3dce32bec4a3997715ac=%7B%22islogin%22%3A%7B%22value%22%3A%220%22%2C%22scope%22%3A1%7D%2C%22isonline%22%3A%7B%22value%22%3A%220%22%2C%22scope%22%3A1%7D%2C%22isvip%22%3A%7B%22value%22%3A%220%22%2C%22scope%22%3A1%7D%7D; c-login-auto-interval=1600932264810; c-login-auto=21; log_Id_click=22; TY_SESSION_ID=e8ac6ab4-7be3-4505-8de6-e60d8e6dcbaf; c_first_ref=www.baidu.com; c_segment=2; c_ref=https%3A//www.baidu.com/link; firstDie=1; dc_sid=bb0f3faadb6161c9367dff0eedca0806; announcement-new=%7B%22isLogin%22%3Afalse%2C%22announcementUrl%22%3A%22https%3A%2F%2Flive.csdn.net%2Froom%2Fweixin_47115905%2FbcobcpkN%3Futm_source%3Dgonggao_1201%22%2C%22announcementCount%22%3A0%2C%22announcementExpire%22%3A3600000%7D; unlogin_scroll_step=1607407727764; dc_session_id=10_1607409818014.626300; c_first_page=https%3A//blog.csdn.net/zhouchuxiong/article/details/89315720; c_page_id=default; dc_tos=ql0dcq; log_Id_pv=154; c_pref=https%3A//www.baidu.com/link; Hm_lvt_6bcd52f51e9b3dce32bec4a3997715ac=1606981537,1606981637,1607407710,1607409819; Hm_lpvt_6bcd52f51e9b3dce32bec4a3997715ac=1607409819; log_Id_view=527; __gads=ID=cb448cc86c7bddef-22cd839b13c5004b:T=1607409824:RT=1607409824:S=ALNI_MZZZSPtW-gDHD7BSR1pxH4SpaXEGQ";
    this.cookieStr = cookie;
    this.init();
}
CookieTool.prototype.init = function(){
    let arr = this.cookieStr.split('; ');
    let cookieJson = {};
    arr.forEach(val=>{
        let _arr = val.split('=');
        let key = _arr[0].trim();
        let value = encodeURIComponent(_arr.slice(1).join(''));
        cookieJson[key] = value;
    })
    this.cookieJson = cookieJson;
}
// 
CookieTool.prototype.set = function(key , value){
    this.cookieJson[key] = encodeURIComponent(value);
    this.deal();
    return this.cookieStr;
}

CookieTool.prototype.get = function (key) {
    if(key in this.cookieJson){
        return this.cookieJson[key];
    }else{
        return null;
    }
}

CookieTool.prototype.delete = function (key) {
    delete this.cookieJson[key];
    this.deal();
    return this.cookieStr;
}
CookieTool.prototype.deal = function(){
    let str = ''
    for (let key in this.cookieJson) {
        str += key + '=' + this.cookieJson[key];
    }
    this.cookieStr = str;
    if (typeof document !== 'undefined'){
        document.cookie = cookieStr;
    }
}

let cookie = new CookieTool();
console.log(cookie.cookieJson);

cookie.set('lqq' ,'big');

console.log(cookie.get('lqq'));