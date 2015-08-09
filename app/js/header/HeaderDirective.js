module.exports = function() {
    var directive = {
        restrict: 'EA',
        scope: {
            info: '='
        },
        templateUrl: 'js/header/header.html',
        controller: 'HeaderController',
        controllerAs: 'vm',
        bindToController: true
    };

    return directive;
};
