module.exports = function CompanyListController(CompanyResource, metaResource, config, countries, categories) {
  var vm = this;
  vm.getImageUrl = getImageUrl;

  CompanyResource.listCompanies().then(function(companies) {
    vm.companies = companies;
  });

  // Fetch data for countries dropdown
  vm.countries = countries.data;

  // Fetch data for categories dropdown
  vm.categories = categories.data;
  vm.categories.unshift({id:9999, name: 'All'});

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
