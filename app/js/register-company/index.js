(function() {
    'use strict';

    require('angular').module('app.regCompany', [])
        .controller('RegCompanyController', require('./RegCompanyController'))
        .factory('CompanyService', require('./CompanyService'));
})();
