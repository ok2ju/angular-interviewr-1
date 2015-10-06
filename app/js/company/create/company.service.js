module.exports = function($resource) {
  return $resource('http://localhost:3000/api/v1/companies/:id', {id: '@_id'}, {
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
