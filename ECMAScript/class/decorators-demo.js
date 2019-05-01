import {mixins} from  "./mixins";

{

  // target : 类的原型对象
  // name : 所要装饰的属性名
  // descriptor: 该属性的描述对象
  let readonly=function(target,name,descriptor){
    // descriptor对象原来的值如下
    // {
    //   value: specifiedFunction,
    //   enumerable: false,
    //   configurable: true,
    //   writable: true
    // };

    console.log('target',target);
    console.log('name',name);


    descriptor.writable=false;
    return descriptor
  };

  // readonly(Person.prototype, 'name', descriptor);
  // 类似于
  // Object.defineProperty(Person.prototype, 'name', descriptor);


  class Test{
    @readonly
    time(){
      return '2017-03-11'
    }
    update(){
      return 'this is update';
    }
  }

  let test=new Test();

  test.update = function(){
    console.log('this is update2');
  }

  // test.time=function(){
  //   console.log('reset time');
  // };

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
  // 修饰类
  @testable
  class MyTestableClass {
    // ...
  }

  function testable(target) {
    target.isTestable = 'This is testable';
  }
  console.log(MyTestableClass.isTestable );
}

{
  // 向 修饰中 添加 参数

  function testable(isTestable) {
    return function(target) {
      target.isTestable = isTestable;
    }
  }

  @testable(true)
  class MyTestableClass {}
  console.log('testable params => ',MyTestableClass.isTestable) // true

  @testable(false)
  class MyClass {}
  console.log('testable params => ',MyClass.isTestable) // false
}

{

  const Foo = {
    foo() { console.log('mixins form => foo') }
  };

  @mixins(Foo)
  class MyClass {}

  let obj = new MyClass();
  obj.foo() // 'foo'
}