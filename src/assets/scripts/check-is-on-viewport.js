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
            if (!isSkillsPlayed) {
                animSkills();
            }
            if (!isAnimCardsPlayed) {
                animCards();
            }
            if (!isContactButtonPlayed) {
                animContactButton();
            }
        });

        var isSkillsPlayed = false;
        function animSkills() {
            if ($('.skill-logo').isInViewport()) {
                $('.skill-logo').addClass('scale-in-center');
                window.setTimeout(removeAnimSkills, 1000);
                isSkillsPlayed = true;
            }
        }
        function removeAnimSkills() {
            $('.skill-logo').removeClass('scale-in-center');
        };

        var isAnimCardsPlayed = false;
        function animCards() {
            if ($('.card').isInViewport()) {
                $('.card').addClass('scale-in-center');
                window.setTimeout(removeAnimCards, 1000);
                isAnimCardsPlayed = true;
            }
        }
        function removeAnimCards() {
            $('.card').removeClass('scale-in-center');
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