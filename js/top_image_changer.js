// JavaScript Document
$(document).ready(function() {
  $.getJSON("/arts/lost_property_list.json" , function(data) {
    var
      ulObj = $("#demo"),
      len = data.length;
    for(var i = 0; i < len; i++) {
      ulObj.append($("<li>").attr({"id":data[i].id}).text(data[i].name));
    }
  });
});
