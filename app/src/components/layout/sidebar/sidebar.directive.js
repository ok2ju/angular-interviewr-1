export function SidebarDirective(config) {
  return {
    restrict: 'EA',
    scope: {
        info: '='
    },
    templateUrl: `${config.ROOT_DIR}/src/components/layout/sidebar/sidebar.tpl.html`,
    controller: 'SidebarController',
    controllerAs: 'vm',
    bindToController: true
  };
}