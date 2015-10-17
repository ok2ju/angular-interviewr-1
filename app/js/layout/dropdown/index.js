(function() {
    'use strict';

    require('angular').module('app.dropdown', [])
        .directive('dropDown', require('./dropdown.directive'));
})();
