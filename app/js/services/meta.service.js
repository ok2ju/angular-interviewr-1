require('angular')
  .module('app.resource.meta', ['ngResource'])
    .factory('metaResource', metaResource);

function metaResource($http, config) {
  var countries_url = config.api_url + '/api/v1/countries';
  var categories_url = config.api_url + '/api/v1/categories';

  function getCountries() {
    return $http({
      url: countries_url,
      method: 'GET'
    });
  }

   function getCategories() {
    return $http({
      url: categories_url,
      method: 'GET'
    });
  }

  return {
    getCountries: getCountries,
    getCategories: getCategories
  }
}
