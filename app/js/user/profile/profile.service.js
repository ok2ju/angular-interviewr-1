module.exports = function($resource, config) {
  var url = config + '/api/v1/users/:id';

  return $resource(url, { id: '@_id' }, {
    update: {
      method: 'PUT'
    }
  });
};
