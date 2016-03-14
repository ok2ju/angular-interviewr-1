module.exports = function UserProfileController(userResource, config, $stateParams, imageService, Vendor) {
  const vm = this;
  const {moment} = Vendor;

  vm.user = {};
  vm.getImageUrl = getImageUrl;

  userResource.one($stateParams.id).then(function(user) {
    vm.user = user;
    vm.user.age = moment().diff(moment(vm.user.dob, 'YYYYMMDD'), 'years');

  });

  function getImageUrl() {
    return imageService.getUserImageUrl(vm.user);
  }
};
