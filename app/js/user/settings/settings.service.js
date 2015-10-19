module.exports = function($resource, config) {
  var settings_url = config.api_url + '/api/v1/users/:id';

  return $resource(settings_url, { id: '@_id' }, {
    update: {
      method: 'PUT'
    }
  });
};
