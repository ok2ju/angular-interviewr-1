import angular from 'angular';

angular
  .module('app.vacancy.candidates', ['ui.bootstrap'])
    .factory('CandidatesService', require('./candidates.service'))
    .controller('CandidatesController', require('./candidates.controller'))
    .controller('CandidatesDashboardController', require('./dashboard.controller'))
    .controller('InterviewSetupModalCtrl', require('./interview-setup.controller'));
