import {ROOT_DIR} from '../../../constants';

module.exports = function() {
    var directive = {
        restrict: 'EA',
        scope: true,
        templateUrl: `${ROOT_DIR}/src/common/layout/header/header.tpl.html`,
        controller: 'HeaderController',
        controllerAs: 'vm',
        bindToController: true
    };

    return directive;
};
