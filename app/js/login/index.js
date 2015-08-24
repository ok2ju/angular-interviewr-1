(function() {
    'use strict';

    /*require('angular').module('app.login', ['app.auth'])
        .controller('LoginController', require('./login.controller'));*/

    require('angular').module('app.login', ['angular-storage'])
        .controller('LoginController', require('./login.controller'));
})();
