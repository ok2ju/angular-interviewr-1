module.exports = function($resource) {
  return $resource('http://localhost:3000/api/v1/users/:id', { id: '@_id' }, {
    update: {
      method: 'PUT'
    }
  });
};
