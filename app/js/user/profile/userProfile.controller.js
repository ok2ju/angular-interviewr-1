module.exports = function(UserResource, store, jwtHelper) {
  var vm = this;

  var jwt = store.get('jwt');
  var decodedJwt = jwt && jwtHelper.decodeToken(jwt);

  UserResource.get({ id: decodedJwt._id }, function(data) {
    vm.user = data;
  });
};
