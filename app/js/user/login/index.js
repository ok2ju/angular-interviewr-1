(function() {
    'use strict';

    require('angular').module('app.login', ['angular-storage', 'ui.router', 'mgcrea.ngStrap.alert'])
      .config(require('./login.config'))
      .controller('LoginController', require('./login.controller'));
})();
