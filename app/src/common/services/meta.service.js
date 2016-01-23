require('angular')
  .module('app.resource.meta', ['restangular'])
    .factory('metaResource', metaResource);

function metaResource(Restangular) {

  var service = {
    getCountries: getCountries,
    getCategories: getCategories,
    getVacancyPosition: getVacancyPosition,
    getVacancyType: getVacancyType
  };

  function getCountries() {
    return Restangular.one('meta', 'countries').get();
  }

  function getCategories() {
    return Restangular.one('meta', 'categories').get();
  }

  function getVacancyPosition() {
    return Restangular.one('meta', 'position').get();
  }

  function getVacancyType() {
    return Restangular.one('meta', 'vacancyType').get();
  }

  return service;
}
