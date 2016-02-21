module.exports = function CompanyProfileController(companyResource, vacancyResource, $stateParams, config, imageService) {
  const vm = this;

  vm.getImageUrl = getImageUrl;
  vm.leaveComment = leaveComment;

  companyResource.one($stateParams.id).then(function(company) {
    vm.company = company;
    vm.owner = company.owner;
  });

  vacancyResource.list({company_id: $stateParams.id}).then(function(vacancies) {
    vm.vacancies = vacancies;
  });

  function getImageUrl() {
    return imageService.getCompanyImageUrl(vm.company);
  }

  function leaveComment(comment) {
    companyResource.comment($stateParams.id, {text: comment}).then(function() {
      console.log('Comment was successfully added!');
    });
  }

};
