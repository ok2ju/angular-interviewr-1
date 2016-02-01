import angular from 'angular';
import {ROOT_DIR} from '../../constants';

angular
  .module('app.calendar', [])
    .controller('CalendarController', require('./calendar.controller'))
    .config(calendarConfig);

function calendarConfig($stateProvider) {
  $stateProvider
    .state('app.calendar', {
      url: '/calendar',
      templateUrl: `${ROOT_DIR}/src/components/calendar/calendar.tpl.html`,
      controller: 'CalendarController',
      controllerAs: 'vm',
      data: {
        requiresLogin: true,
        pageTitle: 'Calendar'
      }
    });
}
