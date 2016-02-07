import angular from 'angular';

angular
  .module('app.calendar', ['ui.calendar'])
    .controller('CalendarController', require('./calendar.controller'))
    .config(calendarConfig);

function calendarConfig($stateProvider, config) {
  $stateProvider
    .state('app.calendar', {
      url: '/calendar',
      templateUrl: `${config.ROOT_DIR}/src/components/calendar/calendar.tpl.html`,
      controller: 'CalendarController',
      controllerAs: 'vm',
      data: {
        requiresLogin: true,
        pageTitle: 'Calendar'
      }
    });
}
