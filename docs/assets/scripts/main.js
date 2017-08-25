(function () {
  $(document).ready(function () {
    // starting page animations
    $('img, .circles').addClass('bounce-top');
    $('h3').addClass('bounce-left');
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
