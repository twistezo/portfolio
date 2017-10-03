(function () {
  $(document).ready(function () {

    // bootstrap 4 smooth scrollspy 
    $(".nav-item a").on('click', function (event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 400, function () {
          window.location.hash = hash;
        });
      }
    });

    // back to top button
    $('#back-to-top').click(function () {
      $('body,html').animate({
        scrollTop: 0
      }, 400);
      return false;
    });

    // hide collapse navbar on click
    $('.navbar-nav>li>.hide-on-click').on('click', function () {
      $('.navbar-collapse').collapse('hide');
    });

    // cookie warning behaviour
    var cookieWarningName = 'cookie-warning';

    if (readCookie(cookieWarningName) != 1) {
      showCookieWarning();
      hideOnClickCookieWarning();
      createCookie(cookieWarningName, 1, 30);
    }

    function hideOnClickCookieWarning() {
      $('.btn-cookie-warning').on('click', function () {
        $('.cookie-warning').addClass('hidden');
      });
    }

    function showCookieWarning() {
      $('.cookie-warning').removeClass('hidden');
    }

    function createCookie(name, value, days) {
      var expires = "";
      if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
      }
      document.cookie = name + "=" + value + expires + "; path=/";
    }

    function readCookie(name) {
      var nameEQ = name + "=";
      var ca = document.cookie.split(';');
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
      }
      return null;
    }

    function eraseCookie(name) {
      createCookie(name, "", -1);
    }

  });
})();
