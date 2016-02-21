export function LayoutHeaderController($state, $scope, toastr, store, imageService, authService, $rootScope, interviewResource) {
  const vm = this;

  authService.me().then((myself) => {
    vm.user = myself;

    interviewResource
    .list({candidate: vm.user._id})
    .then((interviews) => {
      vm.upcomingInterviews = interviews.filter(interview => {
        console.log(interview);
        const message = ['Interview with', interview.candidate.name, interview.candidate.namesurname];
        interview.title = message.join(' ');
        return new Date(interview.date) > new Date();
      });
    });
  });

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
