(function() {
    'use strict';

    require('angular').module('app.sidebar', [])
        .controller('SidebarController', require('./sidebar.controller'))
        .service('SidebarService', require('./sidebar.service'))
        .directive('sideBar', require('./sidebar.directive'));
})();
