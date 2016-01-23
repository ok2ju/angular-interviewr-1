require('angular')
  .module('app.user.settings', [
    'toastr',
    'ngTagsInput',
    'ui.bootstrap',
    'ngMessages',
    'ngFileUpload',
    'app.services'
  ])
  .controller('UserSettingsController', require('./settings.controller'))
  .controller('ModalInstanceController', require('./modal.controller'));
