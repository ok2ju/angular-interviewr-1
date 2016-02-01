module.exports = function VacancyCandidatesController(vacancyResource, CandidatesService, imageService, $state, $stateParams) {
  var vm = this;

  vm.getUserImageUrl = getUserImageUrl;

  $state.go('app.candidates.grid');

  vacancyResource.subscriptions($stateParams.id).then(subscriptions => vm.subscriptions = subscriptions);

  /*CandidatesService.success(function(data) {
      vm.candidates = data;
  });*/

  function getUserImageUrl(user) {
    return imageService.getImageUrl(user, 'assets/images/user-default.png');
  }
};
