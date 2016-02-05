import {ROOT_DIR} from '../../../constants';

export function headerDirective() {
  const directive = {
    restrict: 'EA',
    scope: true,
    templateUrl: `${ROOT_DIR}/src/common/layout/header/header.tpl.html`,
    controller: 'HeaderController',
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
}
