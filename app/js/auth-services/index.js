(function() {
    'use strict';

    require('angular').module('app.auth', [])
        .factory('Auth', require('./Auth'));
})();
