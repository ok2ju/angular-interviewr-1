(function() {
  'use strict';

  var $ = require('jquery');

  require('angular')
    .module('app.user.settings', [
      'ui.router',
      'ngResource',
      'toastr',
      'ngTagsInput',
      'ui.bootstrap'
    ])
    .config(require('./settings.config'))
    .controller('UserSettingsController', require('./settings.controller'))
    .controller('ModalInstanceController', require('./modal.controller'))
    .factory('UserSettingsService', require('./settings.service'));
})();
