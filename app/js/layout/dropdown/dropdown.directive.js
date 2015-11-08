var $ = require('jquery');

module.exports = function($rootScope) {

  function link(scope, element, attrs) {

    scope.listVisible = false;
    scope.isPlaceholder = true;

    scope.select = function(item) {
      scope.isPlaceholder = false;
      scope.selected = item;

      if(scope.onChange != undefined) {
        scope.onChange(item);
      }
    };

    scope.isSelected = function(item) {
      if(!scope.selected) {
        return false;
      }
      return item[scope.property] === scope.selected[scope.property];
    };

    scope.show = function() {
      scope.listVisible = !scope.listVisible;
    };

    $rootScope.$on('documentClicked', function(inner, target) {
      var dropdown = $(element).find('.ui.dropdown');
      var dropdownItem = $(element).find('.ui-dropdown-item');

      if(!$(target[0]).is(dropdown) && !$(target[0]).is(dropdownItem)) {
        scope.$apply(function() {
          scope.listVisible = false
        });
      }
    });

    scope.$watch('selected', function(value) {
      if(scope.selected) {
        scope.isPlaceholder = scope.selected[scope.property] === undefined;
        scope.display = scope.selected[scope.property];
      }
    });

  }

  var directive = {
        restrict: 'E',
        scope: {
          placeholder: '@',
          dropdownData: '=dropdownAttr',
          selected: '=',
          display: '=',
          property: '@'
        },
        templateUrl: 'js/layout/dropdown/dropdown.html',
        link: link
    };

    return directive;
};
