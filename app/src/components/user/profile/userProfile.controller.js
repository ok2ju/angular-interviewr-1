module.exports = function UserProfileController(UserResource, config, $stateParams, imageService) {

  var vm = this;

  vm.getImageUrl = getImageUrl;

  UserResource.oneUser($stateParams.id).then(function(user) {
    vm.user = user;
  });

  function getImageUrl() {
    return imageService.getImageUrl(vm.user, 'assets/images/user-default.png');
  }
};
