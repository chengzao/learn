'use strict';

var _getOwnPropertyDescriptor = require('babel-runtime/core-js/object/get-own-property-descriptor');

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _mixins = require('./mixins');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

{
  var _desc, _value, _class;

  // target : 类的原型对象
  // name : 所要装饰的属性名
  // descriptor: 该属性的描述对象
  var readonly = function readonly(target, name, descriptor) {
    // descriptor对象原来的值如下
    // {
    //   value: specifiedFunction,
    //   enumerable: false,
    //   configurable: true,
    //   writable: true
    // };

    console.log('target', target);
    console.log('name', name);

    descriptor.writable = false;
    return descriptor;
  };

  // readonly(Person.prototype, 'name', descriptor);
  // 类似于
  // Object.defineProperty(Person.prototype, 'name', descriptor);


  var Test = (_class = function () {
    function Test() {
      (0, _classCallCheck3.default)(this, Test);
    }

    (0, _createClass3.default)(Test, [{
      key: 'time',
      value: function time() {
        return '2017-03-11';
      }
    }, {
      key: 'update',
      value: function update() {
        return 'this is update';
      }
    }]);
    return Test;
  }(), (_applyDecoratedDescriptor(_class.prototype, 'time', [readonly], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'time'), _class.prototype)), _class);


  var test = new Test();

  test.update = function () {
    console.log('this is update2');
  };

  // test.time=function(){
  //   console.log('reset time');
  // };

  console.log(test.time());
}

{
  var _class2;

  var typename = function typename(target, name, descriptor) {
    target.myname = 'hello';
  };

  var _Test = typename(_class2 = function _Test() {
    (0, _classCallCheck3.default)(this, _Test);
  }) || _class2;

  console.log('类修饰符', _Test.myname);
  // 第三方库修饰器的js库：core-decorators; npm install core-decorators
}

{
  var _class3;

  var testable = function testable(target) {
    target.isTestable = 'This is testable';
  };

  var MyTestableClass = testable(_class3 = function MyTestableClass() {
    (0, _classCallCheck3.default)(this, MyTestableClass);
  }) || _class3;

  console.log(MyTestableClass.isTestable);
}

{
  var _dec, _class4, _dec2, _class5;

  // 向 修饰中 添加 参数

  var _testable = function _testable(isTestable) {
    return function (target) {
      target.isTestable = isTestable;
    };
  };

  var _MyTestableClass = (_dec = _testable(true), _dec(_class4 = function _MyTestableClass() {
    (0, _classCallCheck3.default)(this, _MyTestableClass);
  }) || _class4);

  console.log('testable params => ', _MyTestableClass.isTestable); // true

  var MyClass = (_dec2 = _testable(false), _dec2(_class5 = function MyClass() {
    (0, _classCallCheck3.default)(this, MyClass);
  }) || _class5);

  console.log('testable params => ', MyClass.isTestable); // false
}

{
  var _dec3, _class6;

  var Foo = {
    foo: function foo() {
      console.log('mixins form => foo');
    }
  };

  var _MyClass = (_dec3 = (0, _mixins.mixins)(Foo), _dec3(_class6 = function _MyClass() {
    (0, _classCallCheck3.default)(this, _MyClass);
  }) || _class6);

  var obj = new _MyClass();
  obj.foo(); // 'foo'
}
