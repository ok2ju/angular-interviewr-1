require('angular')
  .module('app.resource.user', ['restangular'])
    .factory('UserResource', userResource);

function userResource(Restangular) {

  var service = {
    login: login,
    postUser: postUser,
    listUsers: listUsers,
    oneUser: oneUser,
    userCompanies: userCompanies
  };

  function login(user) {
    return Restangular.all('login').post(user);
  }

  function postUser(user) {
    return Restangular.all('users').post(user);
  }

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
