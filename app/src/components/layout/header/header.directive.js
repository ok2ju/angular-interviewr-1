export function headerDirective(config) {
  return {
    restrict: 'E',
    scope: {
      'user': '='
    },
    transclude: true,
    templateUrl: `${config.ROOT_DIR}/src/components/layout/header/header.tpl.html`,
    controller: 'LayoutHeaderController',
    controllerAs: 'vm',
    bindToController: true
  };
}
