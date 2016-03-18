module.exports = function IroomController(Vendor, authService, interviewResource, openRequestedPopupService) {
  const {moment} = Vendor;
  const vm = this;

  vm.openConferenceRoom = openRequestedPopupService.openRequestedPopup;

  authService.me().then((myself) => {
    vm.user = myself;

    // I'm owner interviews
    interviewResource
      .list({owner: vm.user._id})
      .then((interviews) => {
        vm.ownerInterviews = interviews;
      });

    // I'm candidate interviews
    interviewResource
      .list({candidate: vm.user._id})
      .then((interviews) => {

        vm.editedInterviews = interviews.map((interview) => {
          const message = ['Interview with', interview.company.name];
          interview.title = message.join(' ');
          return interview;
        });

        vm.candidateInterviews = vm.editedInterviews;
      });
  });
};
