module.exports = function VacancyManageController(myself, VacancyResource, CompanyResource, $stateParams, config, imageService) {
  var vm = this;

  vm.getImageUrl = getImageUrl;

  CompanyResource.listCompanies({owner: myself._id}).then(function(companies) {
    vm.companies = companies;
  });

  function getImageUrl(company) {
    return imageService.getImageUrl(company, 'assets/images/companies/default.png');
  }
};
