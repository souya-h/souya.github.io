// JavaScript Document
var touchCount = 0;
var clickEventType=((window.ontouchstart!==null)?'click':'touchstart');
$("body").on(clickEventType, function() {
  // windowがスクロールされた時に実行する処理
  alert("test");
  document.body.innerHTML = document.body.innerHTML.replace("虐殺", "事件");

  touchCount++;
  if(touchCount>5){
    document.body.innerHTML = document.body.innerHTML.replace("屠殺", "処理");
    document.body.innerHTML = document.body.innerHTML.replace("略奪", "募金");
  }
  if(touchCount>10){
    document.body.innerHTML = document.body.innerHTML.replace("南京", "東京");
    document.body.innerHTML = document.body.innerHTML.replace("暴行", "指導");
    document.body.innerHTML = document.body.innerHTML.replace("殺人", "罰則");
  }
  if(touchCount>15){
    $('main').prepend('<img src="./src/kyokujitsuki.png" width="50%">');
    document.body.innerHTML = document.body.innerHTML.replace("日本軍", "中国軍");
  }

});