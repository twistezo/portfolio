'use strict';
(function () {
  $.fn.isInViewport = function () {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
  };

  // id="test" -> '#test'
  // class="test" -> '.test'
  // <h3> -> 'h3'
  $(window).on('resize scroll', function () {
    animWhenInViewport('#skills-logos', 'bounce-in-top');
  });

  function animWhenInViewport(viewportEl, animClass) {
    if ($(viewportEl).isInViewport()) {
      $(viewportEl).addClass(animClass);
    }
  }

})();
