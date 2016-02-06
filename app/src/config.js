import angular from 'angular';

angular.module('app.config', [])
  .constant('config', {
    'API_URL': 'http://localhost:3000',
    'ROOT_DIR': 'app'
  });
