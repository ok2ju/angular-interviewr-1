module.exports = function VacancyCandidatesController(
  vacancyResource, CandidatesService, imageService, $state, $stateParams, $uibModal, config) {

  var vm = this;

  vm.getUserImageUrl = getUserImageUrl;

  $state.go('app.candidates.grid');

  vacancyResource.subscriptions($stateParams.id).then(subscriptions => vm.subscriptions = subscriptions);

  vm.openInterviewModal = function() {
    $uibModal.open({
      animation: true,
      templateUrl: `${config.root_dir}/src/components/vacancy/candidates/views/interview-setup-modal.tpl.html`,
      controller: 'InterviewSetupModalCtrl',
      controllerAs: 'vm',
      resolve: {
      }
    });
  }

  /*CandidatesService.success(function(data) {
      vm.candidates = data;
  });*/

  function getUserImageUrl(user) {
    return imageService.getImageUrl(user, 'assets/images/user-default.png');
  }
};
