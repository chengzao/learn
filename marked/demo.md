# marked

I am using __markdown__. 

## code

```js
 Array.prototype.unique = function () {
    var json = {};
    var result = [];
    this.forEach(function (value) {
      // 判断数组中的类型
      var type = Object.prototype.toString.call(value).match(/\s(\w+)/)[1].toLowerCase();
      // 根据类型判断该数组中的项是否在json中
      if (!((type + '-' + value) in json)) {
        json[type + '-' + value] = true;
        result.push(value);
      }
    })
    return result;
  }
```

## css

```
body {
  margin: 0;
  padding-top: 0;
  background-color: #F7F7F7;
}

ul {
  height: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
}
```

## tag

<img src="https://cdn.jsdelivr.net/gh/chengzao/imgbed@main/images/css-transition.png" onerror=alert(1)//>

## heading+

$ demo code