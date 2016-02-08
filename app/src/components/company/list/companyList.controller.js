module.exports = function CompanyListController(companyResource, countries, categories) {
  const vm = this;

  vm.resetFilter = resetFilter;

  companyResource.list().then(function(companies) {
    vm.companies = companies;
  });

  vm.countries = countries.data;

  vm.categories = categories.data;

  // Reset filters query
  function resetFilter() {
    vm.category = {};
    vm.company = {};
    vm.country = {};
  }
};
