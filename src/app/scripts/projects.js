(function () {
  $(document).ready(function () {

    // force active `all` button on start
    $('.filter-button').filter("[data-filter=all]").addClass('active');

    let cardsCounter = 0;
    $('.filter-button').click(function () {
      let value = $(this).attr('data-filter');

      // add animation on button click
      $('.card').addClass('swing-in-top-fwd');
      setTimeout(() => $('.card').removeClass('swing-in-top-fwd') , 500);


      if (value == 'all') {
        $('.filter').show();
        cardsCounter = $('.filter').length;
      }
      else {
        $('.filter').not('.' + value).hide();
        $('.filter').filter('.' + value).show();
        cardsCounter = $('.filter').filter('.' + value).length;
      }

      // change bootstrap cards layout according to cards quantity
      if (cardsCounter <= 3) {
        $('#my-cards').removeClass().addClass('card-deck');
      } else {
        $('#my-cards').removeClass().addClass('card-columns');
      }
      if (cardsCounter == 6) {
        $('#my-cards').css('column-count', '').css('column-count', '3');
      } else {
        $('#my-cards').css('column-count', '').css('column-count', '4');
      }

      // force active state on button
      if ($('.filter-button').removeClass('active')) {
        $(this).removeClass('active');
      }
      $(this).addClass('active');
    });

  });
})();
