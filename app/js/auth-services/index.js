(function() {
    'use strict';

    require('angular').module('app.auth', [])
        .factory('AuthenticationService', require('./AuthenticationService'))
        .factory('FlashService', require('./FlashService'))
        .factory('FakeUserService', require('./FakeUserService'));

    //  real userService
    //  .factory('UserService', require('./UserService'))
})();