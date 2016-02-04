module.exports = function VacancyCandidatesController(
  vacancyResource, CandidatesService, imageService, $state, $stateParams, $uibModal, config) {

  const vacancyId = $stateParams.id;

  var vm = this;

  vm.getUserImageUrl = getUserImageUrl;

  $state.go('app.candidates.grid');

  vacancyResource.subscriptions(vacancyId).then(subscriptions => vm.subscriptions = subscriptions);

  vm.openInterviewModal = (subscription) => {
    $uibModal.open({
      animation: true,
      templateUrl: `${config.root_dir}/src/components/vacancy/candidates/views/interview-setup-modal.tpl.html`,
      controller: 'InterviewSetupModalCtrl',
      controllerAs: 'vm',
      resolve: {
        cb: () => onInterviewSetupModalOk
      }
    });

    function onInterviewSetupModalOk(data) {
      const interview = {
        date: data.date,
        time: data.time,
        candidate: subscription.candidate._id,
        vacancyId: vacancyId
      }
      console.log(interview);
    }
  }

  

  /*CandidatesService.success(function(data) {
      vm.candidates = data;
  });*/

  function getUserImageUrl(user) {
    return imageService.getImageUrl(user, 'assets/images/user-default.png');
  }
};
