module.exports = function() {
    var directive = {
        restrict: 'EA',
        scope: {
            info: '='
        },
        templateUrl: 'js/layout/header/header.html',
        controller: 'HeaderController',
        controllerAs: 'vm',
        bindToController: true
    };

    return directive;
};
