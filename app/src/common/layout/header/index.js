import angular from 'angular';

angular
  .module('app.header', ['toastr'])
    .controller('HeaderController', require('./header.controller'))
    .directive('headerNav', require('./header.directive'));
