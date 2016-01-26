require('angular')
  .module('app.company.list', [
      'app.resource.company',
      'app.filter.date',
      'app.services'
    ])
    .controller('CompanyListController', require('./companyList.controller'));
