require('angular')
  .module('app.user.signup', [
      'toastr',
      'ngMessages'
  ])
  .config(require('./signup.config'))
  .controller('SignupController', require('./signup.controller'))
  .directive('repeatPassword', require('./repeatPass.directive'));
