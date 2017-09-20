(function () {
    $(document).ready(function () {

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
            if (!isAnimCirclesPlayed) {
                animCircles();
            }
            if (!isAnimCardsPlayed) {
                animCards();
            }
            if (!isContactButtonPlayed) {
                animContactButton();
            }
        });

        var isAnimCirclesPlayed = false;
        function animCircles() {
            if ($('.c100').isInViewport()) {
                $('.c100').addClass('bounce-in-top');
                window.setTimeout(removeAnimCircles, 1250);
                isAnimCirclesPlayed = true;
            }
        }
        function removeAnimCircles() {
            $('.c100').removeClass('bounce-in-top');
        };

        var isAnimCardsPlayed = false;
        function animCards() {
            if ($('.card').isInViewport()) {
                $('.card').addClass('scale-in-ver-center');
                window.setTimeout(removeAnimCards, 1000);
                isAnimCardsPlayed = true;
            }
        }
        function removeAnimCards() {
            $('.card').removeClass('scale-in-ver-center');
        };

        var isContactButtonPlayed = false;
        function animContactButton() {
            if ($('footer').isInViewport()) {
                $('.btn').addClass('heartbeat');
                window.setTimeout(removeAnimContactButton, 5000);
                isContactButtonPlayed = true;
            }
        }
        function removeAnimContactButton() {
            $('.btn').removeClass('heartbeat');
        };

    });
})();