module.exports = function(UserProfileService, store, jwtHelper) {
  var vm = this;

  var jwt = store.get('jwt');
  var decodedJwt = jwt && jwtHelper.decodeToken(jwt);

  UserProfileService.get({ id: decodedJwt._id }, function(data) {
    vm.user = data;
  });
};
