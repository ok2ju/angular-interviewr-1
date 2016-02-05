import angular from 'angular';
import {LayoutHeaderController} from './header.controller';
import {headerDirective} from './header.directive';

angular
  .module('app.header', ['toastr'])
    .controller('LayoutHeaderController', LayoutHeaderController)
    .directive('headerNav', headerDirective);
