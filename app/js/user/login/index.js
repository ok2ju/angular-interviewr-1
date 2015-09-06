(function() {
    'use strict';

    require('angular').module('app.login', ['angular-storage', 'ui.router', 'toastr'])
      .config(require('./login.config'))
      .controller('LoginController', require('./login.controller'));
})();
