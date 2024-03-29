require('angular')
  .module('app.resource.company', ['restangular'])
    .factory('CompanyResource', companyResource);

function companyResource(Restangular) {

  var service = {
    listCompanies: listCompanies,
    oneCompany: oneCompany,
    postCompany: postCompany,
    updateCompany: updateCompany,
    removeCompany: removeCompany
  };

  function listCompanies(query) {
    return Restangular.all('companies').getList(query);
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

  function removeCompany(id) {
    return Restangular.one('companies', id).remove();
  }

  return service;
}
