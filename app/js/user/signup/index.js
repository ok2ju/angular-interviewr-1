(function() {
  'use strict';

  require('angular')
    .module('app.signup', [
        'angular-storage',
        'ui.router',
        'mgcrea.ngStrap.alert',
        'ngMessages'
    ])
    .config(require('./signup.config'))
    .controller('SignupController', require('./signup.controller'))
    .directive('repeatPassword', require('./repeatPass.directive'));
})();
