export function StarRating(config) {
  return {
    restrict: 'A',
    templateUrl: `${config.ROOT_DIR}/src/components/interview/feedback/stars.tpl.html`,
    scope: {
        ratingValue: '=',
        max: '='
    },
    link: function (scope, elem, attrs) {
        scope.stars = [];
        for (var i = 0; i < scope.max; i++) {
            scope.stars.push({
                filled: i < scope.ratingValue
            });
        }
    }
  };
}
