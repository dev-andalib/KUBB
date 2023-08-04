$(".icon").click(function(){
    $(".nav_menu").toggle(300)
})

var vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

if (vw < 800) {
  $('.nav_menu').hide();
}

$(window).on('load', function() {
  vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

  if (vw < 800) {
    $('.nav_menu').hide();
  }else{
    $('.nav_menu').show();
  }
});


$(window).on('resize', function() {
  vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

  if (vw < 800) {
    $('.nav_menu').hide();
  }else{
    $('.nav_menu').show();
  }
});