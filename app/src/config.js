import angular from 'angular';

angular.module('app.config', [])
  .constant('config', {
    'API_URL': 'http://localhost:3000',
    'ROOT_DIR': 'app',
    'CONF_URL': 'https://192.168.1.103:8123/interviewroom',
    states: {
      CALENDAR: 'app.calendar',
      CANDIDATES_GRID: 'app.candidates.grid'
    }
  });
