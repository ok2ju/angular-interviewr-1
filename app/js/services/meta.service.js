require('angular')
  .module('app.resource.meta', ['restangular'])
    .factory('metaResource', metaResource);

function metaResource(Restangular) {

  var service = {
    getCountries: getCountries,
    getCategories: getCategories
  };

  function getCountries() {
    return Restangular.all('countries').getList();
  }

  function getCategories() {
    return Restangular.all('categories').getList();
  }

  return service;
}
