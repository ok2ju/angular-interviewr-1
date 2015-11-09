require('angular')
  .module('app.resource.vacancy', ['ngResource'])
    .factory('VacancyResource', vacancyResource);

function vacancyResource($resource, config) {
  var vacancyUrl = config.api_url + '/api/v1/vacancies/:id';
  return $resource(vacancyUrl, { id: '@_id' }, {
    update: {method: 'PUT'}
  });
}
