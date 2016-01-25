module.exports = function CompanyListController(CompanyResource, config, countries, categories, imageService) {
  var vm = this;
  vm.getImageUrl = getImageUrl;
  vm.getUserImageUrl = getUserImageUrl;

  CompanyResource.listCompanies().then(function(companies) {
    vm.companies = companies;
  });

  // Fetch data for countries dropdown
  vm.countries = countries.data;

  // Fetch data for categories dropdown
  vm.categories = categories.data;
  vm.categories.unshift({id:9999, name: 'All'});

  function getImageUrl(company) {
    return imageService.getImageUrl(company, 'assets/images/companies/default.png');
  }

  function getUserImageUrl(user) {
    return imageService.getImageUrl(user, 'assets/images/user-default.png');
  }

};
