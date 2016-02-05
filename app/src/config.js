import angular from 'angular';

angular.module('app.config', [])
  .constant('config', {
    'API_URL': 'https://localhost:8123',
    'ROOT_DIR': 'app'
  });