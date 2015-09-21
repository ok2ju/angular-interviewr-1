module.exports = function() {
    var directive = {
        restrict: 'EA',
        scope: true,
        templateUrl: 'js/layout/header/header.html',
        controller: 'HeaderController',
        controllerAs: 'vm',
        bindToController: true
    };

    return directive;
};
