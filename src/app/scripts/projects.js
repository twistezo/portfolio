(function () {
  $(document).ready(function () {

    let cardsCounter = 0;
    $(".filter-button").click(function () {
      var value = $(this).attr('data-filter');

      if (value == "all") {
        $('.filter').show();
        cardsCounter = $('.filter').length;
      }
      else {
        $(".filter").not('.' + value).hide();
        $('.filter').filter('.' + value).show();
        cardsCounter = $('.filter').filter('.' + value).length;
      }

      // change bootstrap cards layout according to cards quantity
      if (cardsCounter <= 3) {
        $("#my-cards").removeClass().addClass("card-deck");
      } else {
        $("#my-cards").removeClass().addClass("card-columns");
      }

      // force active state on button
      if ($(".filter-button").removeClass("active")) {
        $(this).removeClass("active");
      }
      $(this).addClass("active");
    });

  });
})();
