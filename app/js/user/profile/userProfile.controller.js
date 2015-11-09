module.exports = function UserProfileController(userResource, store, jwtHelper) {
  var vm = this;

  var jwt = store.get('jwt');
  var decodedJwt = jwt && jwtHelper.decodeToken(jwt);

  userResource.get({ id: decodedJwt._id }, function(data) {
    vm.user = data;
  });
};
