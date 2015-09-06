(function() {
  'use strict';

  require('angular')
    .module('app.user.signup', [
        'angular-storage',
        'ui.router',
        'toastr',
        'ngMessages'
    ])
    .config(require('./signup.config'))
    .controller('SignupController', require('./signup.controller'))
    .directive('repeatPassword', require('./repeatPass.directive'));
})();
