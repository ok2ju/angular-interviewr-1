module.exports = function CompanyProfileController(companyResource, vacancyResource, $stateParams, config, imageService) {
  const vm = this;
  vm.getImageUrl = getImageUrl;

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
};
