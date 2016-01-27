import angular from 'angular';

angular
  .module('app.vacancy.candidates', [])
    .factory('CandidatesService', require('./candidates.service'))
    .controller('CandidatesController', require('./candidates.controller'));
