// JavaScript Document
var touchCount = 0;
var clickEventType=((window.ontouchstart!==null)?'click':'touchstart');
//$(window).ontouchstart(function() {
window.addEventListener("touchstart", function (event) {
//$("body").on(clickEventType, function() {
  // windowがスクロールされた時に実行する処理
  document.body.innerHTML = document.body.innerHTML.replace("虐殺", "事件");

  touchCount++;
  if(touchCount>5){
    document.body.innerHTML = document.body.innerHTML.replace("屠殺", "処理");
    document.body.innerHTML = document.body.innerHTML.replace("略奪", "募金");
    document.body.innerHTML = document.body.innerHTML.replace("虐殺", "事件");
  }
  if(touchCount>10){
    document.body.innerHTML = document.body.innerHTML.replace("南京", "東京");
    document.body.innerHTML = document.body.innerHTML.replace("暴行", "指導");
    document.body.innerHTML = document.body.innerHTML.replace("殺人", "罰則");
    document.body.innerHTML = document.body.innerHTML.replace("虐殺", "事件");
  }
  if(touchCount>20){
    document.body.innerHTML = document.body.innerHTML.replace("日本軍", "中国軍");
    if(touchCount%4==1){
      $('main').prepend('<img src="./src/kyokujitsuki.png" width="50%">');
    }
  }
  if(touchCount>40){
    document.body.innerHTML = document.body.innerHTML.replace("事件", "事件の捏造");
    if(touchCount%2==1){
      $('main').prepend('<img src="./src/kyokujitsuki.png" width="50%">');
    }
  }
});