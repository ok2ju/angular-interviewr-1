(function() {
    'use strict';

    require('angular').module('app.header', ['app.auth'])
        .controller('HeaderController', require('./HeaderController'))
        .directive('headerNav', require('./HeaderDirective'));
})();
