'use strict';
(function () {
    $(document).ready(function () {
        var cookieWarningName = 'cookie-warning';

        if (readCookie(cookieWarningName) != 1) {
            showCookieWarning();
            hideOnClickCookieWarning();
        }

        function hideOnClickCookieWarning() {
            $('.btn-cookie-warning').on('click', function () {
                $('.cookie-warning').addClass('hidden');
                createCookie(cookieWarningName, 1, 30);
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