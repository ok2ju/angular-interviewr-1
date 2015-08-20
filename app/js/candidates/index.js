(function() {
    'use strict';

    require('angular').module('app.candidates', [])
        .factory('CandidatesService', require('./candidates.service'))
        .controller('CandidatesController', require('./candidates.controller'));
})();
