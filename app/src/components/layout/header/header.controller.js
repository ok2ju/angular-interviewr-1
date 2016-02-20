export function LayoutHeaderController($state, $scope, toastr, store, imageService, authService, $rootScope) {
  const vm = this;

  authService.me().then(myself => vm.user = myself);

  $rootScope.$watch('pageName', (v) => {
    vm.pageName = v;
  });

  /*vm.user = $scope.user;
  console.log('USER DATA - ' + $scope.user);*/
  vm.getImageUrl = function() {
    return imageService.getUserImageUrl(vm.user);
  };
  vm.isActivity = false;

  vm.logout = function() {
    authService.logout();
    $state.go('intro.login');
    toastr.info('You have been logged out.', 'Info!');
  };

  vm.toggleActivity = function() {
    vm.isActivity = !vm.isActivity;
  };
}
