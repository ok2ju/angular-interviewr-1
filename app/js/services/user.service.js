require('angular')
  .module('app.resource.user', ['ngResource'])
    .factory('UserResource', userResource);

function userResource($resource, config) {
  var userUrl = config.api_url + '/api/v1/users/:id';
  return $resource(userUrl, { id: '@_id' }, {
    update: {method: 'PUT'}
  });
}
