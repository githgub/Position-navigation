var items;
var menu;
var Top;
var itemTop;
var currentId="";
$(document).ready(function() {
  items = $("#content").find(".item");
  menu = $("#menu");
  $(window).scroll(function() {
    Top = $(document).scrollTop();
    items.each(function() {               //数组遍历
      var m = $(this);
      itemTop = m.offset().top;
      if (Top > itemTop-200) {
        currentId = "#" + m.attr("id");
        console.log(currentId);
      } else {
        return false;
      }
    });
    
   var currentli= menu.find(".current");
   if( currentId &&currentli.attr("id")!=currentId){
    currentli.removeClass("current");
    menu.find("[href="+currentId+"]").addClass("current");//属性选择器
   }
  });
  
});
