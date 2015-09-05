module.exports = function($resource) {
  return $resource('http://localhost:3000/api/users/:id', { id: '@_id' }, {
    update: {
      method: 'PUT'
    }
  });
};
