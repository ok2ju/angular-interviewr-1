(function() {
  'use strict';

  require('angular')
    .module('app.user.resource', ['ngResource'])
    .factory('UserResource', require('./user.service'));
})();
