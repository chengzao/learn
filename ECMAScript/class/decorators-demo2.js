  import { readonly } from 'core-decorators';
{
  
  class Test{
    constructor(name){
       this.name = name; 
    }
    
    @readonly
    time(){
      return '2017-03-11'
    }
  }

  let test=new Test();

  console.log(test.time());
}

{
  let typename=function(target,name,descriptor){
    target.myname='hello';
  }

  @typename
  class Test{

  }

  console.log('类修饰符',Test.myname);
  // 第三方库修饰器的js库：core-decorators; npm install core-decorators
}

{
  let log = (type) => {
    return function(target, name, descriptor){

      // console.log(target, name, descriptor)

      let scr_method = descriptor.value;

      descriptor.value = (...arg) => {
        scr_method.apply(target,arg);
        console.log('this is log ',type);
      }
    }
  }

  class AD {
    constructor(name){
       this.name = name; 
    }
    @log('show')
    show(){
      console.log('ad is show')
    }
    @log('click')
    click(name){
      console.log('ad is click',name)
    }
  }

  let ad =new AD();
  ad.show();
  ad.click('xiao ming');  

}