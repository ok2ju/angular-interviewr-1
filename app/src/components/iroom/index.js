import angular from 'angular';

angular
  .module('app.iroom', [])
    .controller('IroomController', require('./iroom.controller'))
    .config(iroomConfig);

function iroomConfig($stateProvider, config) {
  $stateProvider
    .state('app.iroom', {
      url: '/iroom',
      templateUrl: `${config.ROOT_DIR}/src/components/iroom/iroom.tpl.html`,
      controller: 'IroomController',
      controllerAs: 'vm',
      data: {
        requiresLogin: true,
        pageTitle: 'Interview Room'
      }
    });
}
