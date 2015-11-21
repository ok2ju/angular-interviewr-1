module.exports = function UserProfileController(UserResource, store, jwtHelper, config) {
  var vm = this;

  var jwt = store.get('jwt');
  var decodedJwt = jwt && jwtHelper.decodeToken(jwt);

  vm.getImageUrl = getImageUrl;

  UserResource.oneUser(decodedJwt._id).then(function(user) {
    vm.user = user;
  });

  function getImageUrl() {
    var res = '';
    if(vm.user && vm.user.imageId) {
      res = config.api_url + '/api/v1/images/' + vm.user.imageId;
    } else {
      res = 'images/user-default.png';
    }
    return res;
  };
};
