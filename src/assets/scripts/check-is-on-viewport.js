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
            if (!isPlayed) {
                hover_circles();
            }

        });

        function hover_circles() {
            if ($('.c100').isInViewport()) {
                $('.c100').addClass('hover');
                console.log('jest');
                window.setTimeout(remove, 750);
                isPlayed = true;

            }
        }

        var isPlayed = false;
        function remove() {
            $('.c100').removeClass('hover');
        };

    });
})();