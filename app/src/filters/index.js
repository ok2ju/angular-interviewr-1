import angular from 'angular';

angular
  .module('app.filters', [])
    .filter('moment', require('./date.filter').MomentFilter);