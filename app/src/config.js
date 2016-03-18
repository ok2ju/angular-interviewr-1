import angular from 'angular';

angular.module('app.config', [])
  .constant('config', {
    'API_URL': 'http://localhost:3000',
    'ROOT_DIR': 'app',
    'CONF_URL': 'https://localhost:3000/interview',
    states: {
      CALENDAR: 'app.calendar',
      CANDIDATES_GRID: 'app.candidates.grid'
    }
  });
