import angular from 'angular';
import {LayoutHeaderController} from './header.controller';
import {headerDirective} from './header.directive';
import {clickAnywhereButHereDirective} from './clickAnywhere.directive';

angular
  .module('app.header', ['toastr'])
    .directive('headerNav', headerDirective)
    .directive('clickAnywhereButHere', clickAnywhereButHereDirective)
    .controller('LayoutHeaderController', LayoutHeaderController);
