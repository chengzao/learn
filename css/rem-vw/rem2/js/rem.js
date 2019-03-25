function setFontSize(){
  var deviceWidth = document.documentElement.clientWidth;
  if (deviceWidth > 640) deviceWidth = 640;
  document.documentElement.style.fontSize = deviceWidth / 7.5 + 'px';
}

document.addEventListener('DOMContentLoaded', setFontSize, false)
window.addEventListener(window.orientationchange ? 'orientationchange' : 'resize', setFontSize, false);