module.exports = function() {
    var directive = {
        restrict: 'EA',
        scope: true,
        templateUrl: 'common/layout/header/header.tpl.html',
        controller: 'HeaderController',
        controllerAs: 'vm',
        bindToController: true
    };

    return directive;
};
