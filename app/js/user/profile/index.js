(function() {
  'use strict';

  require('angular').module('app.user.profile', [
        'ui.router',
        'app.user.resource'
    ])
    .config(require('./userProfile.config'))
    .controller('UserProfileController', require('./userProfile.controller'));
})();
