var date = [{
    'id': 1,
    'val': '一夜春风到1'
},
{
    'id': 2,
    'val': '新年花枝俏2'
},
{
    'id': 3,
    'val': '俏也不争春3'
},
{
    'id': 4,
    'val': '只报福来报4'
}, ];

var i = 0;

var hei = document.querySelector('.d_show');
var coun = 0;

setInterval(function () {
    var Hei = hei.clientHeight;
    if (Hei < 90) {
        if (i < date.length) {
            input(i)
            i++;
        } else {
            i = 0
            input(i)
            i++;
        }
    }
    else {
        hei.children[0].remove()
        if (i < date.length) {
            input(i)
            i++;
        } else {
            i = 0
            input(i)
            i++;
        }
    }
    coun++;
}, 1000);


function input(i) {
    var liDom = document.createElement('div');
    liDom.innerHTML = "<img src='bg.png'/>" + date[i].val;
    liDom.style.animation = 'myfirst 3.5s';
    liDom.style.animationDelay = 0.5 + 's';
    hei.appendChild(liDom);
}