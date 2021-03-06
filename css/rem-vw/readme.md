# Mobile移动端

## dpr

- dpr: 物理像素数和css像素被称为设备像素比
- dpr的值，js通过`window.devicePixelRadio`获取 
- dpr的值，css通过`-webkit-device-pixel-ratio | -webkit-min-device-pixel-ratio | -webkit-max-device-pixel-ratio `获取
- 物理像素（physical pixel）: 手机屏幕上显示的最小单元
- 设备独立像素（density-indenpendent pixel）: 逻辑像素(css像素数)
- 设备像素比（device pixel ratio）: `设备像素比(dpr) = 物理像素/设备独立像素`

## viewport

- [移动端适配总结@juejin
](https://juejin.im/post/5c0dd7ac6fb9a049c43d7edc)
- layoutviewport: 大于实际屏幕,通过 document.documentElement.clientWidth 获取
- visualviewport: 当前显示在屏幕上的页面，即浏览器可视区域的宽度    
- idealviewport: 为浏览器定义的可完美适配移动端的理想 viewport，固定不变，可以认为是设备视口宽度。比如 iphone 7 为 375px, iphone 7p 为 414px

## viewport 设置

- `head meta`

```html
<meta name='viewport' content='width=device-width,initial-scale=1,user-scale=no' />
```

- `width` 设置的是 `layoutviewport` 的宽度
- `initial-scale` 设置页面的初始缩放值，并且这个初始缩放值是相对于 idealviewport 缩放的，最终得到的结果不仅会决定 visualviewport，还会影响到 layoutviewport
- `user-scalable` 是否允许用户进行缩放的设置

## rem示例1

- js

```js
// 动态计算 页面宽度/一个比例值（比如 10 或者 15）= 1rem

// iphone6: 750; 分成100份 1rem = 750/100 即 html 的宽度为 7.5rem（750 / 100）
// html(font-size) = deviceWidth / 7.5

;(function() {
  document.addEventListener(
    "DOMContentLoaded",
    function(e) {
      document.getElementsByTagName("html")[0].style.fontSize =
        window.innerWidth / 7.5 + "px"
    },
    false
  )
})()
```

- scss

```scss
$block: 100;

/* 单位px转化为rem */
@function px2rem($px) {
    @return #{$px / $block}rem;
}

/* 设置字体大小，不使用rem单位， 根据dpr值分段调整 */
@mixin font-size($fontSize) {
    font-size: $fontSize / $design-dpr;

    [data-dpr="2"] & {
        font-size: $fontSize / $design-dpr * 2;
    }

    [data-dpr="3"] & {
        font-size: $fontSize / $design-dpr * 3;
    }
}
```

## rem示例2

- js

```js
!(function() {
    var docElem = document.documentElement,
        metaElem = document.querySelector('meta[name="viewport"]'),
        dpr = window.devicePixelRatio || 1,
        // 将页面分为10块
        blocks = 10,
        // 需要限制的最小宽度
        defaultMinWidth = 320,
        // 需要限制的最大宽度
        defaultMaxWidth = 540,
        // 计算的基准值
        calcMaxWidth = 9999999;

    if (!metaElem) {
        metaElem = initMetaViewport();
    }

    if (metaElem.getAttribute('data-content-max') !== null) {
        calcMaxWidth = defaultMaxWidth;
    }

    // 确保meta[name="viewport"]存在
    function initMetaViewport() {
        var meta = document.createElement('meta');

        meta.setAttribute('name', 'viewport');
        meta.setAttribute('content', 'width=device-width,initial-scale=1,user-scalable=no');
        document.head.appendChild(meta);

        return meta;
    }

    // 大部分dpr为2以下的安卓机型不识别scale，需设置不缩放
    if (navigator.appVersion.match(/android/gi) && dpr <= 2) {
        dpr = 1;
    }

    setScale(dpr);

    // 企业QQ设置了scale后，不能完全识别scale（此时clientWidth未收到缩放的影响而翻倍），需设置不缩放
    if (navigator.appVersion.match(/qq\//gi) && docElem.clientWidth <= 360) {
        dpr = 1;
        setScale(dpr);
    }

    docElem.setAttribute('data-dpr', dpr);

    // 设置缩放
    function setScale(dpr) {
        metaElem.setAttribute('content', 'initial-scale=' + 1 / dpr + ',maximum-scale=' + 1 / dpr + ',minimum-scale=' + 1 / dpr + ',user-scalable=no');
    }

    // 设置docElem字体大小
    function setFontSize() {
        var clientWidth = docElem.clientWidth;

        clientWidth = Math.max(clientWidth, defaultMinWidth * dpr)

        // 调整计算基准值
        if (calcMaxWidth === defaultMaxWidth) {
            clientWidth = Math.min(clientWidth, defaultMaxWidth * dpr);
        }

        docElem.style.fontSize = clientWidth / blocks + 'px';
    }

    setFontSize();

    window.addEventListener(window.orientationchange ? 'orientationchange' : 'resize', setFontSize, false);
})();
```

- px和rem

```scss
/* 移动端页面设计稿宽度 */
$design-width: 750;
/* 将移动端页面分为10块 */
$blocks: 10;

/* 单位px转化为rem */
@function px2rem($px) {
    @return #{$px / $design-width * $blocks}rem;
}

/* 单位rem转化为px，可用于根据rem单位快速计算原px */
@function rem2px($rem) {
    @return #{$rem / $blocks * $design-width}px;
}
```

## 根据 dpr 选择图片

```scss
@mixin bg(url, type) {
  background-image: url(url+"."+type);

  @media only screen and (-webkit-min-device-pixel-ratio: 2) {
    background-image: url(url+"@2x."+type);
  }

  @media only screen and (-webkit-min-device-pixel-ratio: 3) {
    background-image: url(url+"@3x."+type);
  }
}

#test {
  width: 100px;
  height: 100px;
  background-color: yellow;
  @include bg('../assets/test', 'jpg');
}
```

## 根据 dpr设置font-size

- 设置字体大小，不使用rem单位，根据dpr值分段调整

```scss
/* 移动端页面设计稿dpr基准值 */
$design-dpr: 2;

@mixin font-size($fontSize) {
    font-size: $fontSize / $design-dpr;

    [data-dpr="2"] & {
        font-size: $fontSize / $design-dpr * 2;
    }

    [data-dpr="3"] & {
        font-size: $fontSize / $design-dpr * 3;
    }
}
```

## dpr设置容器大小

```
/* 缩放所支持的设备最小宽度 */
$min-device-width: 320px;
/* 缩放所支持的设备最大宽度 */
$max-device-width: 540px;

/* 设置容器拉伸的最小宽度 */
@mixin container-min-width() {
    margin-right: auto;
    margin-left: auto;
    min-width: $min-device-width;

    @media (-webkit-device-pixel-ratio: 2) {
        min-width: $min-device-width * 2;
    }

    @media (-webkit-device-pixel-ratio: 3) {
        min-width: $min-device-width * 3;
    }
}

/* 设置容器拉伸的最大宽度 */
@mixin container-max-width() {
    margin-right: auto;
    margin-left: auto;
    max-width: $max-device-width;

    @media (-webkit-device-pixel-ratio: 2) {
        max-width: $max-device-width * 2;
    }

    @media (-webkit-device-pixel-ratio: 3) {
        max-width: $max-device-width * 3;
    }
}
```

## vw和vh

[如何在Vue项目中使用vw实现移动端适配](https://www.w3cplus.com/mobile/vw-layout-in-vue.html)