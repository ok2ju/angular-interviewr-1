require('angular')
  .module('app.sidebar', [])
    .controller('SidebarController', require('./sidebar.controller'))
    .directive('sideBar', require('./sidebar.directive'));
