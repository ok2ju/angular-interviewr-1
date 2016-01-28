module.exports = function VacancyCandidatesController(vacancyResource, CandidatesService, imageService, $state, $stateParams) {
  var vm = this;

  vm.getUserImageUrl = getUserImageUrl;

  $state.go('app.candidates.grid');

  vacancyResource.oneVacancy($stateParams.id).then(vacancy => vm.vacancy = vacancy);

  /*CandidatesService.success(function(data) {
      vm.candidates = data;
  });*/

  function getUserImageUrl(user) {
    return imageService.getImageUrl(user, 'assets/images/user-default.png');
  }
};
