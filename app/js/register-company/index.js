(function() {
    'use strict';

    require('angular').module('app.regCompany', [])
        .controller('RegCompanyController', require('./regCompany.controller'))
        .factory('CompanyService', require('./company.service'));
})();
