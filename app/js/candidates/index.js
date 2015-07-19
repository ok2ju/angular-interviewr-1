(function() {
    'use strict';

    require('angular').module('app.candidates', [])
        .factory('CandidatesService', require('./CandidatesService'))
        .controller('CandidatesController', require('./CandidatesController'));
})();