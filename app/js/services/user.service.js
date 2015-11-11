require('angular')
  .module('app.resource.user', ['restangular'])
    .factory('UserResource', userResource);

function userResource(Restangular) {

  var service = {
    listUsers: listUsers,
    oneUser: oneUser,
    userCompanies: userCompanies
  };

  function listUsers() {
    return Restangular.all('users').getList();
  }

  function oneUser(id) {
    return Restangular.one('users', id).get();
  }

  function userCompanies(id) {
    return Restangular.one('users', id).getList('companies');
  }

  return service;
}
