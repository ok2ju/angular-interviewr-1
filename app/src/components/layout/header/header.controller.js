export function LayoutHeaderController($state, $scope, toastr, store, imageService, authService, $rootScope, interviewResource, Vendor) {
  const vm = this;
  const {moment} = Vendor;

  authService.me().then((myself) => {
    vm.user = myself;

    interviewResource
    .list({candidate: vm.user._id, owner: vm.user._id})
    .then((interviews) => {

       let unsortedInterviews = interviews.filter(interview => {
        const message = ['Interview with', interview.candidate.name, interview.candidate.namesurname];
        interview.title = message.join(' ');
        return moment(interview.date).isAfter(moment());
      });

      vm.upcomingInterviews = _.sortBy(unsortedInterviews, ['date']);

    });

  });

  $rootScope.$watch('pageName', (v) => {
    vm.pageName = v;
  });

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
