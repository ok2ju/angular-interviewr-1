export function LayoutHeaderController($state, $scope, toastr, store, imageService) {
  const vm = this;

  /*vm.user = $scope.user;
  console.log('USER DATA - ' + $scope.user);*/
  vm.getImageUrl = function() {
    return imageService.getUserImageUrl(vm.user);
  };
  vm.isActivity = false;

  vm.logout = function() {
    store.remove('jwt');
    $state.go('intro.login');
    toastr.info('You have been logged out.', 'Info!');
  };

  vm.toggleActivity = function() {
    vm.isActivity = !vm.isActivity;
  };
}
