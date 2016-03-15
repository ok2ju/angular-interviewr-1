module.exports = function IroomController(Vendor, authService, interviewResource) {
  const {moment} = Vendor;
  const vm = this;

  authService.me().then((myself) => {
    vm.user = myself;

    interviewResource
      .list({candidate: vm.user._id, owner: vm.user._id})
      .then((interviews) => {
        vm.interviews = interviews;
      });
  });
};
