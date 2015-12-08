require('angular')
  .module('app.user.settings', [
    'app.resource.user',
    'toastr',
    'ngTagsInput',
    'ui.bootstrap',
    'ngMessages',
    'ngFileUpload'
  ])
  .config(require('./settings.config'))
  .controller('UserSettingsController', require('./settings.controller'))
  .controller('ModalInstanceController', require('./modal.controller'));
