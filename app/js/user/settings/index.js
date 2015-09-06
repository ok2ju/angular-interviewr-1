(function() {
  'use strict';

  require('angular')
    .module('app.user.settings', [
      'ui.router',
      'ngResource',
      'toastr',
      'ngTagsInput'
    ])
    .config(require('./settings.config'))
    .controller('UserSettingsController', require('./settings.controller'))
    .factory('UserSettingsService', require('./settings.service'));
})();
