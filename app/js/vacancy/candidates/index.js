require('angular').module('app.vacancy.candidates', [])
  .config(require('./candidates.config'))
  .factory('CandidatesService', require('./candidates.service'))
  .controller('CandidatesController', require('./candidates.controller'));
