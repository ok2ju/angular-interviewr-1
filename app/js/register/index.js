(function() {
    'use strict';

    require('angular').module('app.register', ['app.auth'])
        .controller('RegisterController', require('./RegisterController'));
})();