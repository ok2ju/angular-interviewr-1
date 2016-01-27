import angular from 'angular';

angular
  .module('app.user.signup', [
      'toastr',
      'ngMessages'
    ])
    .controller('SignupController', require('./signup.controller'))
    .directive('repeatPassword', require('./repeatPass.directive'));
