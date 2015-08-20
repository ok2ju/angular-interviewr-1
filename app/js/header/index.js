(function() {
    'use strict';

    require('angular').module('app.header', ['app.auth'])
        .controller('HeaderController', require('./header.controller'))
        .directive('headerNav', require('./header.directive'));
})();
