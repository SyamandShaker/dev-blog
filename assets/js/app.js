// Hide Header on on scroll down
let didScroll;
let lastScrollTop = 0;
let delta = 5;
let navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    let st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}
/*  $(document).ready(function(){
  
    let lastScrollTop = 0;

    $(window).scroll(function(event){

      let st = $(this).scrollTop();
      let main = document.getElementById("main");

      if (st >= 96) {

        if (st > lastScrollTop){
          $(".clearHeader").removeClass("darkHeader");
        } else {
          $(".clearHeader").addClass("darkHeader");
          main.classList.add("menuTop"); 
        } 
        lastScrollTop = st;
      }
    });
}); */
