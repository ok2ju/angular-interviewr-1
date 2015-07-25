module.exports = function() {
    var directive = {
        restrict: 'EA',
        scope: {
            info: '='
        },
        templateUrl: 'js/sidebar/sidebar.html',
        controller: 'SidebarController',
        controllerAs: 'vm',
        bindToController: true
    };

    return directive;
};