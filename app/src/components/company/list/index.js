require('angular')
  .module('app.company.list', [
      'app.resource.company',
      'app.filter.date',
      'app.filter.category',
      'app.services'
    ])
    .controller('CompanyListController', require('./companyList.controller'));
