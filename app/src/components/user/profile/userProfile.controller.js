module.exports = function UserProfileController(userResource, config, $stateParams, imageService) {
  const vm = this;

  vm.getImageUrl = getImageUrl;

  userResource.one($stateParams.id).then(function(user) {
    vm.user = user;
  });

  function getImageUrl() {
    return imageService.getUserImageUrl(vm.user);
  }
};
