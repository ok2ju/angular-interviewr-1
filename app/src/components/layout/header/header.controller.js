export function LayoutHeaderController($state, toastr, store, imageService, myself) {
  const vm = this;

  vm.user = myself;
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
