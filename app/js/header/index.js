(function() {
    'use strict';

    require('angular').module('app.header', ['angular-storage', 'angular-jwt'])
        .controller('HeaderController', require('./header.controller'))
        .directive('headerNav', require('./header.directive'));
})();
