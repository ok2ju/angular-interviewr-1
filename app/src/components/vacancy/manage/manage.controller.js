module.exports = function VacancyManageController(myself, vacancyResource, companyResource, $stateParams, config, imageService) {
  const vm = this;

  vm.getImageUrl = getImageUrl;

  companyResource.list({owner: myself._id}).then(function(companies) {
    vm.companies = companies;
  });

  function getImageUrl(company) {
    return imageService.getImageUrl(company, 'assets/images/companies/default.png');
  }
};
