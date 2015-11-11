module.exports = function CompanyListController(CompanyResource, metaResource) {
  var vm = this;

  CompanyResource.listCompanies().then(function(companies) {
    vm.companies = companies;
  });

  // Fetch data for countries dropdown
  metaResource.getCountries().then(function(countries) {
    vm.countries = countries;
  }, function(err) {
      console.log('Error fetching countries!');
  });

  // Fetch data for categories dropdown
  // unshift hardcore here! TODO: add 'All' category to categories collection
  metaResource.getCategories().then(function(categories) {
    vm.categories = categories;
    vm.categories.unshift({id:9999, name: 'All'});
  }, function(err) {
      console.log('Error fetching categories!');
  });

};
