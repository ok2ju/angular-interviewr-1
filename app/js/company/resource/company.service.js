module.exports = function($resource, config) {
  var url = config.api_url + '/api/v1/companies/:id';
  var owner_url = config.api_url + '/api/v1/users/:id';

  return {
    Profile: $resource(url, { id: '@_id' }, {update: {method: 'PUT'}}),
    Owner: $resource(owner_url, { id: '@_id' })
  };
};
