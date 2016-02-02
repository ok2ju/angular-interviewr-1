import angular from 'angular';
import {ROOT_DIR} from '../../constants';
import fullcalendar from 'fullcalendar';

angular
  .module('app.calendar', ['ui.calendar'])
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
