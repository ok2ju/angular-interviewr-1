(function() {
    'use strict';

    require('angular').module('app.header', ['angular-storage', 'angular-jwt', 'toastr'])
        .controller('HeaderController', require('./header.controller'))
        .directive('headerNav', require('./header.directive'));
})();
