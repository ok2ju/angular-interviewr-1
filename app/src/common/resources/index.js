import angular from 'angular';

angular
  .module('app.resources', ['restangular'])
    .factory('userResource', require('./User'))
    .factory('companyResource', require('./Company'))
    .factory('vacancyResource', require('./Vacancy'))
    .factory('metaResource', require('./Meta'))
    .factory('interviewResource', require('./Interview').InterviewResource);
