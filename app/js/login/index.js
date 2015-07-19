(function() {
    'use strict';

    require('angular').module('app.login', ['app.auth'])
        .controller('LoginController', require('./LoginController'));
})();