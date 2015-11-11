module.exports = function UserProfileController(UserResource, store, jwtHelper) {
  var vm = this;

  var jwt = store.get('jwt');
  var decodedJwt = jwt && jwtHelper.decodeToken(jwt);

  UserResource.oneUser(decodedJwt._id).then(function(user) {
    vm.user = user;
  });
};
