module.exports = function InterviewFeedbackController($state, $stateParams, toastr, config, interviewResource) {
  const vm = this;

  interviewResource.one($stateParams.id).then((interview) => {
    vm.interview = interview;

    interviewResource.getFeedback($stateParams.id).then((feedback) => {
      vm.feedback = feedback;
    });
  });
};
