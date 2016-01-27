import angular from 'angular';

angular
  .module('app.services', [])
    .factory('imageService', require('./image.service'));
