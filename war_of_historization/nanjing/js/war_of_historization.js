// JavaScript Document
var scrollCount = 0;
$(window).touchStart(function() {
  // windowがスクロールされた時に実行する処理
  document.body.innerHTML = document.body.innerHTML.replace("虐殺", "事件");

  scrollCount++;
  if(scrollCount>5){
    document.body.innerHTML = document.body.innerHTML.replace("屠殺", "処理");
    document.body.innerHTML = document.body.innerHTML.replace("略奪", "募金");
  }
  if(scrollCount>10){
    document.body.innerHTML = document.body.innerHTML.replace("南京", "東京");
    document.body.innerHTML = document.body.innerHTML.replace("暴行", "指導");
    document.body.innerHTML = document.body.innerHTML.replace("殺人", "罰則");
  }
  if(scrollCount>15){
    $('main').prepend('<img src="./src/kyokujitsuki.png" width="50%">');
    document.body.innerHTML = document.body.innerHTML.replace("日本軍", "中国軍");
  }

});