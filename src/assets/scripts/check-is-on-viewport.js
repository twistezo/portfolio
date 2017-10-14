'use strict';
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
            if ($('.skill-circle').isInViewport()) {
                createCircle('.java-circle', 60);
                createCircle('.rust-circle', 80);
                createCircle('.web-circle', 70);
                createCircle('.mobile-circle', 50);
                createCircle('.graphics-circle', 90);

                function createCircle(divId, percent) {
                    var circleSize = 80;
                    $(divId).circleProgress({
                        value: percent * 0.01,
                        fill: '#2aabd2',
                        size: circleSize,
                        emptyFill: 'rgba(119, 119, 119, 1)',    // #777
                        startAngle: -Math.PI / 2,
                        animation: { duration: 1600, easing: "circleProgressEasing" },
                        insertMode: 'append',
                    }).on('circle-animation-progress', function (event, progress, stepValue) {
                        $(this).find('strong').html(Math.round(100 * stepValue) + '<span>%</span>');
                    });
                }
                isAnimCirclesPlayed = true;
            }
        }

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
                $('.btn-footer').addClass('heartbeat');
                window.setTimeout(removeAnimContactButton, 5000);
                isContactButtonPlayed = true;
            }
        }
        function removeAnimContactButton() {
            $('.btn-footer').removeClass('heartbeat');
        };

    });
})();