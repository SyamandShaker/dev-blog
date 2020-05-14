$(document).ready(function(){

  /* $(window).scroll(function() {    
    let scroll = $(window).scrollTop();
  
    if (scroll >= 35) {
        $(".clearHeader").addClass("darkHeader");
    } else {
        $(".clearHeader").removeClass("darkHeader");
    }
  }); */
  
    var lastScrollTop = 0;

    $(window).scroll(function(event){

      var st = $(this).scrollTop();

      if (st >= 96) {

        if (st > lastScrollTop){
          $(".clearHeader").removeClass("darkHeader");
        } else {
          $(".clearHeader").addClass("darkHeader");
        }
        lastScrollTop = st; //console.log(lastScrollTop);

      }
    });

});
