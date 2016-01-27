module.exports = function CompanyProfileController(companyResource, vacancyResource, $stateParams, config, imageService) {
  var vm = this;
  vm.getImageUrl = getImageUrl;

  companyResource.oneCompany($stateParams.id).then(function(company) {
    vm.company = company;
    vm.owner = company.owner;
  });

  vacancyResource.listVacancies({company_id: $stateParams.id}).then(function(vacancies) {
    vm.vacancies = vacancies;
  });

  function getImageUrl() {
    return imageService.getImageUrl(vm.company, 'assets/images/companies/default.png');
  }
};
