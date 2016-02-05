module.exports = function CompanyListController(companyResource, config, countries, categories, imageService) {

  const {USER_DEFAULT_IMAGE, COMPANY_DEFAULT_IMAGE} = imageService.getContants();

  var vm = this;
  vm.getImageUrl = getImageUrl;
  vm.getUserImageUrl = getUserImageUrl;
  vm.resetFilter = resetFilter;

  companyResource.listCompanies().then(function(companies) {
    vm.companies = companies;
  });

  // Fetch data for countries dropdown
  vm.countries = countries.data;

  // Fetch data for categories dropdown
  vm.categories = categories.data;

  function getImageUrl(company) {
    return imageService.getImageUrl(company, USER_DEFAULT_IMAGE);
  }

  function getUserImageUrl(user) {
    return imageService.getImageUrl(user, COMPANY_DEFAULT_IMAGE);
  }

  // Reset filters query
  function resetFilter() {
    vm.category = {};
    vm.company = {};
    vm.country = {};
  }

};
