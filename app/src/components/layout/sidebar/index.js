import angular from 'angular';

import {LayoutSidebarController} from './sidebar.controller';
import {SidebarDirective} from './sidebar.directive';

angular
  .module('app.sidebar', [])
    .controller('SidebarController', LayoutSidebarController)
    .directive('sideBar', SidebarDirective);
