(function() {
  'use strict';

  require('angular').module('app.vacancy.candidates', ['ui.router'])
    .config(require('./candidates.config'))
    .factory('CandidatesService', require('./candidates.service'))
    .controller('CandidatesController', require('./candidates.controller'));
})();
