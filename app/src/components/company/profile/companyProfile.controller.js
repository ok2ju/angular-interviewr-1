module.exports = function CompanyProfileController(companyResource, vacancyResource, $state, $stateParams, config, imageService) {
  const vm = this;

  vm.getImageUrl = getImageUrl;
  vm.getUserImageUrl = getUserImageUrl;
  vm.leaveComment = leaveComment;

  companyResource.one($stateParams.id).then(function(company) {
    vm.company = company[0];
    vm.owner = company[0].owner;
  });

  vacancyResource.list({company_id: $stateParams.id}).then(function(vacancies) {
    vm.vacancies = vacancies;
  });

  companyResource.comments($stateParams.id).then((comments) => {
    vm.comments = comments;
  });

  function getImageUrl() {
    return imageService.getCompanyImageUrl(vm.company);
  }

  function getUserImageUrl(user) {
    return imageService.getUserImageUrl(user);
  }

  function leaveComment(comment) {
    companyResource.comment($stateParams.id, {text: comment}).then(function() {
      $state.go($state.current, {}, { reload: true });
    });
  }

};
