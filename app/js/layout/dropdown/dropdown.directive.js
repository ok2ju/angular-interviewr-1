var $ = require('jquery');

module.exports = function() {
  function link(scope, element, attrs) {

    var dropdown = element.children();

    dropdown.on('click', function() {
      var menu = $(this).find('.menu');

      $(this).toggleClass('active');
      $(this).toggleClass('visible');

      menu.toggleClass('visible');
      menu.toggleClass('hidden');
    });

    $(document).on('click', function(event) {
      if (!$(event.target).closest('.dropdown, .menu').length) {
        // Hide the menus.
        $('.dropdown').removeClass('active');
        $('.dropdown').removeClass('visible');
        $('.dropdown').find('.menu').removeClass('visible');
        $('.dropdown').find('.menu').removeClass('hidden');
      }
    });

  }

  var directive = {
        restrict: 'EA',
        scope: true,
        templateUrl: 'js/layout/dropdown/dropdown.html',
        link: link
    };

    return directive;
};
