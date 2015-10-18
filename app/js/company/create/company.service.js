module.exports = function($resource, config) {
  var url = config.api_url + '/api/v1/companies/:id';

  return $resource(url, {id: '@_id'}, {
    update: {
      method: 'PUT'
    },
    get: {
      method: 'GET'
    },
    query: {
      method: 'GET'
    },
    save: {
      method: 'POST'
    }
  });
};
