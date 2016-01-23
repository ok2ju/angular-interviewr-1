require('angular')
  .module('app.company.profile', [
      'app.resource.company',
      'app.resource.user'
    ])
    .controller('CompanyProfileController', require('./companyProfile.controller'));
