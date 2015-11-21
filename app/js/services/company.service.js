require('angular')
  .module('app.resource.company', ['restangular'])
    .factory('CompanyResource', companyResource);

function companyResource(Restangular) {

  var service = {
    listCompanies: listCompanies,
    oneCompany: oneCompany,
    postCompany: postCompany,
    updateCompany: updateCompany
  };

  function listCompanies() {
    return Restangular.all('companies').getList();
  }

  function oneCompany(id) {
    return Restangular.one('companies', id).get();
  }

  function postCompany(company) {
    return Restangular.all('companies').post(company);
  }

  function updateCompany(id, data) {
    return Restangular.one('companies', id).customPUT(data);
  }

  return service;
}
