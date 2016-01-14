module.exports = function UserProfileController(UserResource, config, $stateParams) {

  var vm = this;

  vm.getImageUrl = getImageUrl;

  UserResource.oneUser($stateParams.id).then(function(user) {
    vm.user = user;
  });

  function getImageUrl() {
    var res = '';
    if(vm.user && vm.user.imageId) {
      res = config.api_url + '/api/v1/images/' + vm.user.imageId;
    } else {
      res = 'assets/images/user-default.png';
    }
    return res;
  };
};
