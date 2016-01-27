module.exports = function UserProfileController(userResource, config, $stateParams, imageService) {

  var vm = this;

  vm.getImageUrl = getImageUrl;

  userResource.oneUser($stateParams.id).then(function(user) {
    vm.user = user;
  });

  function getImageUrl() {
    return imageService.getImageUrl(vm.user, 'assets/images/user-default.png');
  }
};
