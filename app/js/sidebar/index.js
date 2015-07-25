(function() {
    'use strict';

    require('angular').module('app.sidebar', [])
        .controller('SidebarController', require('./SidebarController'))
        .service('SidebarService', require('./SidebarService'))
        .directive('sideBar', require('./SidebarDirective'));
})();