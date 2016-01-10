module.exports = function() {
    var directive = {
        restrict: 'EA',
        scope: {
            info: '='
        },
        templateUrl: 'common/layout/sidebar/sidebar.tpl.html',
        controller: 'SidebarController',
        controllerAs: 'vm',
        bindToController: true
    };

    return directive;
};
