module.exports = function CompanyListController(CompanyResource, metaResource, config) {
  var vm = this;
  vm.getImageUrl = getImageUrl;

  CompanyResource.listCompanies().then(function(companies) {
    vm.companies = companies;
  });

  // Fetch data for countries dropdown
  metaResource.getCountries().then(function(countries) {
    vm.countries = countries.data;
  }, function(err) {
      console.log('Error fetching countries!');
  });

  // Fetch data for categories dropdown
  // unshift hardcore here! TODO: add 'All' category to categories collection
  metaResource.getCategories().then(function(categories) {
    vm.categories = categories.data;
    vm.categories.unshift({id:9999, name: 'All'});
  }, function(err) {
      console.log('Error fetching categories!');
  });

  function getImageUrl(company) {
    var res = '';
    if(company && company.imageId) {
      res = config.api_url + '/api/v1/images/' + company.imageId;
    } else {
      res = 'images/companies/default.png';
    }
    return res;
  };

};
