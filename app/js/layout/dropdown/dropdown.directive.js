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
      return item[scope.property] === scope.selected[scope.property];
    };

    scope.show = function() {
      scope.listVisible = true;
    };

    $rootScope.$on('documentClicked', function(inner, target) {
      if(!$(target[0]).is('.ui.dropdown') && !$(target[0]).is('.ui-dropdown-item')) {
        scope.$apply(function() {
          scope.listVisible = false;
        });
      }
    });

    scope.$watch('selected', function(value) {
      scope.isPlaceholder = scope.selected[scope.property] === undefined;
      scope.display = scope.selected[scope.property];
    });

  }

  var directive = {
        restrict: 'E',
        scope: {
          placeholder: '@',
          dropdownData: '=dropdownAttr',
          selected: '=',
          property: '@'
        },
        templateUrl: 'js/layout/dropdown/dropdown.html',
        link: link
    };

    return directive;
};
