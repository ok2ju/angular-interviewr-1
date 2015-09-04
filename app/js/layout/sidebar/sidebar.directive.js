module.exports = function() {
    var directive = {
        restrict: 'EA',
        scope: {
            info: '='
        },
        templateUrl: 'js/layout/sidebar/sidebar.html',
        controller: 'SidebarController',
        controllerAs: 'vm',
        bindToController: true
    };

    return directive;
};
