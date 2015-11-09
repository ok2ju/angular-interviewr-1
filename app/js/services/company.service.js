require('angular')
  .module('app.resource.company', ['ngResource'])
    .factory('companyResource', companyResource);

function companyResource($resource, config) {
  var companyUrl = config.api_url + '/api/v1/companies/:id';
  return $resource(companyUrl, { id: '@_id' }, {
    update: {method: 'PUT'}
  });
}
