(function () {
  $(document).ready(function () {
    // starting page animations
    $('img, .circles').addClass('bounce-top');
    $('h3').addClass('bounce-left');

    $('#myNavbar a').on('click', function(event) {
      if (this.hash !== '') {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 900, function(){
          window.location.hash = hash;
        });
      }
    });
  });
  
  $(document).ready(function () {
    // links hovering animation
    $('img').hover(function(){
          $(this).addClass('vibrate-1');
          
          }, function(){
          $(this).removeClass('vibrate-1 bounce-top');
      });
    });
})();
