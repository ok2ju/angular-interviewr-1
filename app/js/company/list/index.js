require('angular')
  .module('app.company.list', [
      'app.resource.company',
      'app.filter.date',
      'app.filter.category'
    ])
    .config(require('./companyList.config'))
    .controller('CompanyListController', require('./companyList.controller'));
