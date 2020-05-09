$(window).scroll(function() {    
  let scroll = $(window).scrollTop();

  if (scroll >= 35) {
      $(".clearHeader").addClass("darkHeader");
  } else {
      $(".clearHeader").removeClass("darkHeader");
  }
});