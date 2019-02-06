// 五行item
var items = document.querySelectorAll('.wx-item');
// 太极
var R = 420 / 2;
var s = 360 / 5;
// 水
function waterPos() {
    var waterRadian = (2 * Math.PI / 360 * (90 - s));
    var waterDom = document.querySelector('.water');

    var waterH = Math.sin(waterRadian) * R;
    var waterW = Math.cos(waterRadian) * R;

    var waterX = R + waterW;
    var waterY = R - waterH;

    console.log('水 : ', 'x =>', waterX, 'y =>', waterY)

    waterDom.style.left = waterX + 'px';
    waterDom.style.top = waterY + 'px';
}
// waterPos();

// 木
function woodPos() {
    var waterRadian = ((Math.PI / 180) * (s - (90 - s)));
    var waterDom = document.querySelector('.wood');

    var waterH = Math.sin(waterRadian) * R;
    var waterW = Math.cos(waterRadian) * R;


    var waterX = R + waterW;
    var waterY = R + waterH;

    console.log('木 : ', 'x =>', waterX, 'y =>', waterY)

    waterDom.style.left = waterX + 'px';
    waterDom.style.top = waterY + 'px';
}
// woodPos();


// 火
function firePos() {
    var waterRadian = (2 * Math.PI / 360 * (s - (90 - s)));
    var waterDom = document.querySelector('.fire');

    var waterH = Math.sin(waterRadian) * R;
    var waterW = Math.cos(waterRadian) * R;

    var waterX = R - waterW;
    var waterY = R + waterH;

    console.log('火 : ', 'x =>', waterX, 'y =>', waterY)

    waterDom.style.left = waterX + 'px';
    waterDom.style.top = waterY + 'px';
}
// firePos();

// 土
function earthPos() {
    var waterRadian = (2 * Math.PI / 360 * (90 - s));
    var waterDom = document.querySelector('.earth');

    var waterH = Math.sin(waterRadian) * R;
    var waterW = Math.cos(waterRadian) * R;

    var waterX = R - waterW;
    var waterY = R - waterH;

    console.log('土 : ', 'x =>', waterX, 'y =>', waterY)

    waterDom.style.left = waterX + 'px';
    waterDom.style.top = waterY + 'px';
}
// earthPos();


console.log('-------------------------');

console.log(items)

let posArr = [];

for (var i = 0; i < 5; i++) {
    let _radian = (90 - (s * i + s)) * (Math.PI / 180);
    let x = R + Math.cos(_radian) * R
    let y = R - Math.sin(_radian) * R
    if (i == 4) {
        posArr.unshift([x, y]);
    }else{
        posArr.push([x, y]);
    }
    console.log('x => ', x, 'y => ', y);
}
let smalls = document.querySelectorAll('.small_line');
let larges = document.querySelectorAll('.large_line');

for(var j =0;j<items.length;j++){
    items[j].style.left = posArr[j][0]+'px';
    items[j].style.top = posArr[j][1]+'px';
    smalls[j].style.left = posArr[j][0]+'px';
    smalls[j].style.top = posArr[j][1]+'px';
    larges[j].style.left = posArr[j][0]+'px';
    larges[j].style.top = posArr[j][1]+'px';
}


