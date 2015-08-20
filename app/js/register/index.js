(function() {
    'use strict';

    require('angular').module('app.register', ['app.auth'])
        .controller('RegisterController', require('./register.controller'))
        .directive('repeatPassword', require('./repeatPass.directive'));
})();
