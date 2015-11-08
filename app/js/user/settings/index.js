(function() {
  'use strict';

  require('angular')
    .module('app.user.settings', [
      'app.user.resource',
      'app.shared.meta',
      'ui.router',
      'toastr',
      'ngTagsInput',
      'ui.bootstrap',
      'ngMessages'
    ])
    .config(require('./settings.config'))
    .controller('UserSettingsController', require('./settings.controller'))
    .controller('ModalInstanceController', require('./modal.controller'));
})();
