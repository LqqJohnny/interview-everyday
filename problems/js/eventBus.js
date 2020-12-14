class EventBus{

    constructor(maxLisNum = 10){
        this._maxLisNum = maxLisNum;
        this._events = new Map();
    }
    // 添加监听的方法 
    // name 监听的 事件名  fn 监听函数
    on(name, fn){
        let target = this._events.get(name) || [];
        if ( target.length>=10 ){
            throw new Errror('已达到最大输监听数量限制')
        }
        target.push( fn );
        this._events.set(name , target);
    }
    // 触发事件  
    // name   
    // args 参数数组
    emit(name , ...args){
        let evs = this._events.get(name);
        if (this._events.get(name)){
            evs.forEach(val=>{
                val.apply(this , args);
            })
        }else{
            throw new Error("没有该事件："+name);
        }
    }
    
    remove(name , fn){
        let evt = this._events.get(name);
        let index = evt.indexOf(fn);
        if(index >=0){
            evt.splice(index,1);
        }
    }

}

let eb = new EventBus(10);

eb.on('fuck' , function(){
    console.log('fuck');
})

eb.on('fuck', function () {
    console.log('you');
})

eb.emit('fuck');