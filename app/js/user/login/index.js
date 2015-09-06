(function() {
    'use strict';

    require('angular').module('app.user.login', ['angular-storage', 'ui.router', 'toastr'])
      .config(require('./login.config'))
      .controller('LoginController', require('./login.controller'));
})();
