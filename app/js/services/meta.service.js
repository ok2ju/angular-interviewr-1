require('angular')
  .module('app.resource.meta', ['restangular'])
    .factory('metaResource', metaResource);

function metaResource(Restangular) {

  var service = {
    getCountries: getCountries,
    getCategories: getCategories
  };

  function getCountries() {
    return Restangular.one('meta', 'countries').get();
  }

  function getCategories() {
    return Restangular.one('meta', 'categories').get();
  }

  return service;
}
