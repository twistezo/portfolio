import jQueryBridget from 'jquery-bridget';
import Isotope from 'isotope-layout';
import imagesLoaded from 'imagesloaded';

class ProjectsCards {
  init() {
    // make Isotope and imagesLoaded a jQuery plugins
    jQueryBridget('isotope', Isotope, $);
    jQueryBridget('imagesLoaded', imagesLoaded, $);

    $(document).ready(function () {
      var $grid = $('.grid').imagesLoaded(function () {
        $grid.isotope({
          itemSelector: '.element-item',
          layoutMode: 'masonry',
          masonry: {
            horizontalOrder: true,
            fitWidth: true,
            gutter: 10,
          },
        })
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
