import angular from 'angular';

angular
  .module('app.user.settings', [
      'toastr',
      'ngTagsInput',
      'ui.bootstrap',
      'ngMessages',
      'ngFileUpload'
    ])
    .controller('UserSettingsController', require('./settings.controller'))
    .controller('ModalInstanceController', require('./modal.controller'));
