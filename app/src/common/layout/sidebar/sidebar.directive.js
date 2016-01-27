import {ROOT_DIR} from '../../../constants';

module.exports = function() {
  var directive = {
      restrict: 'EA',
      scope: {
          info: '='
      },
      templateUrl: `${ROOT_DIR}/src/common/layout/sidebar/sidebar.tpl.html`,
      controller: 'SidebarController',
      controllerAs: 'vm',
      bindToController: true
  };

  return directive;
};
