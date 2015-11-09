require('angular')
  .module('app.user.settings', [
    'app.resource.user',
    'app.resource.meta',
    'toastr',
    'ngTagsInput',
    'ui.bootstrap',
    'ngMessages',
    'ngFileUpload'
  ])
  .config(require('./settings.config'))
  .controller('UserSettingsController', require('./settings.controller'))
  .controller('ModalInstanceController', require('./modal.controller'));
