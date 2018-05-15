import jQueryBridget from 'jquery-bridget';
import Isotope from 'isotope-layout';

class ProjectsCards {
  init() {
    // make Isotope a jQuery plugin
    jQueryBridget('isotope', Isotope, $);

    $(document).ready(function () {
      var $grid = $('.grid').isotope({
        itemSelector: '.element-item',
        layoutMode: 'masonry',
        masonry: {
          fitWidth: true,
          gutter: 10,
        },
      });

      $('.filters-button-group').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
      });

      $('.button-group').each(function (i, buttonGroup) {
        var $buttonGroup = $(buttonGroup);
        $buttonGroup.on('click', 'button', function () {
          $buttonGroup.find('.active').removeClass('active');
          $(this).addClass('active');
        });
      });
    });
  }
}

export { ProjectsCards as default }
