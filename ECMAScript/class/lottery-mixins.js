// import Timer from  './lottery/timer.js';
// import Calculate from './lottery/calculate.js';
// import Interface from './lottery/interface.js';

const deepCopy = function(target,source){
    for (const key of Reflect.ownKeys(source)) {
        if(key !== "constructor" && key !== "prototype" && key !== "name"){
            let desc = Object.getOwnPropertyDescriptor(source,key);
            Object.defineProperty(target,key,desc);
        }
    }
}

const mix = function(...mixins){
    class Mix{}
    for (const mixin of mixins) {
        deepCopy(Mix,mixin);
        deepCopy(Mix.prototype,mixin.prototype);
    }
    return Mix;
}

class Lottery extends mix(Timer,Calculate,Interface){
    constructor(){
        super()
    }
    a(){
        console.log('mix')
    }
}
export default Lottery;