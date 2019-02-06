#### README

- 这是放在 www.chenio.com 下的文件

- 域名是通过本地wamp虚拟的网站域名

- 以http协议形式打开文件，勿以file协议打开

- JSONP案例解析

```
JSONP的优点是：它不像XMLHttpRequest对象实现的Ajax请求那样受到同源策略的限制；它的兼容性更好，在更加古老的浏览器中都可以运行，不需要XMLHttpRequest或ActiveX的支持；并且在请求完毕后可以通过调用callback的方式回传结果。

JSONP的缺点则是：它只支持GET请求而不支持POST等其它类型的HTTP请求；它只支持跨域HTTP请求这种情况，不能解决不同域的两个页面之间如何进行JavaScript调用的问题。
```

```
案例：利用wampServer在本地配置两个不同源域名
- www.chenio.com
- api.chenio.com

 www.chenio.com 域名下文件 JSONP

 api.chenio.com 域名下文件 jsonp2

 测试api 为 百度weather 。	

 在www.chenio.com域名中访问html页面
```