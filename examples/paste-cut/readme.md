#### API介绍
- `复制、剪切、粘贴事件`

```
copy 发生复制操作时触发;
cut 发生剪切操作时触发;
paste 发生粘贴操作时触发;
每个事件都有一个before事件对应：beforecopy、beforecut、beforepaste;
```
- `使用`

```js
    document.body.oncopy = e => {
        // 监听全局复制 做点什么
    }
    // 还有这种写法：
    document.addEventListener("copy", e => {
        // 监听全局复制 做点什么
    });
```
#### clipboardData对象

- `用于访问以及修改剪贴板中的数据`

```js
    // 兼容
    document.body.oncopy = e => {
        let clipboardData = (e.clipboardData || window.clipboardData); 
        // 获取clipboardData对象 + do something
    }

```
- `对象有三个方法: getData()`

```js
// 要粘贴的数据 :
  document.body.onpaste = e => {
      let clipboardData = (e.clipboardData || window.clipboardData); // 兼容处理
      console.log('要粘贴的数据', clipboardData.getData('text'));
  }
// 被复制/剪切的数据 :
  document.body.oncopy = e => {
      console.log('被复制的数据:', window.getSelection(0).toString());
  }
```

- `对象有三个方法: setData()`

```
参数：
第一个参数也是'text'，
第二个参数是要放在剪切板中的文本
```

- `对象有三个方法: clearData()`


#### 实现类知乎与掘金复制大段文本添加版权信息

```js
    // 掘金这里不是全局监听，应该只是监听文章的dom范围内。
    document.body.oncopy = event => {
        event.preventDefault(); // 取消默认的复制事件 
        let textFont, copyFont = window.getSelection(0).toString(); // 被复制的文字 等下插入
        // 防知乎掘金 复制一两个字则不添加版权信息 超过一定长度的文字 就添加版权信息
        if (copyFont.length > 10) {
            textFont = copyFont + '\n'
                + '作者：OBKoro1\n'
                + '链接：https://juejin.im/user/58714f0eb123db4a2eb95372/posts\n'
                + '来源：掘金\n'
                + '著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。';
        } else {
            textFont = copyFont; // 没超过十个字 则采用被复制的内容。
        }
        if (event.clipboardData) {
            return event.clipboardData.setData('text', textFont); // 将信息写入粘贴板
        } else {
            // 兼容IE
            return window.clipboardData.setData("text", textFont);
        }
    }
```

#### 实现类起点网的防复制功能

- css

```css
    // css 禁止文本选择 这样不会触发js
    body {
        user-select: none;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
    }
```
- js

```js
    // 禁止右键菜单
    document.body.oncontextmenu = e => {
        console.log(e, '右键');
        return false;
        // e.preventDefault();
    };
    // 禁止文字选择。
    document.body.onselectstart = e => {
        console.log(e, '文字选择');
        return false;
        // e.preventDefault();
    };
    // 禁止复制
    document.body.oncopy = e => {
        console.log(e, 'copy');
        return false; 
        // e.preventDefault();
    }
    // 禁止剪切
    document.body.oncut = e => {
        console.log(e, 'cut');
        return false;
        // e.preventDefault();
    };
    // 禁止粘贴
    document.body.onpaste = e => {
        console.log(e, 'paste');
        return false;
        // e.preventDefault();
    };
```

#### 点击复制功能

```js
# 创建一个隐藏的input框
# 点击的时候，将要复制的内容放进input框中
# 选择文本内容input.select()
  这里只能用input或者textarea才能选择文本。
# document.execCommand("copy")，执行浏览器的复制命令

 function copyText() {
   var text = document.getElementById("text").innerText; // 获取要复制的内容也可以传进来
   var input = document.getElementById("input"); // 获取隐藏input的dom
   input.value = text; // 修改文本框的内容
   input.select(); // 选中文本
   // 获得选中的内容
   var content = window.getSelection().toString();
   document.execCommand("copy"); // 执行浏览器复制命令
 }
```

#### 来源

- `https://juejin.im/post/5b66993ee51d451924734c35`