module.exports = function(CompanyResource, $http, $scope, config) {
  var vm = this;
  var countries_url = config.api_url + '/api/v1/countries';
  var categories_url = config.api_url + '/api/v1/categories';

  vm.companies = CompanyResource.Profile.query();

  vm.getCountries = function() {
    $http({
      url: countries_url,
      method: 'GET'
    }).then(function(response) {
      vm.countries = response.data;
    }, function(error) {
      console.log('Error!');
    });
  };

  vm.getCategories = function() {
    $http({
      url: categories_url,
      method: 'GET'
    }).then(function(response) {
      vm.categories = response.data;
      vm.categories.unshift({id:9999, name: 'All'});
    }, function(error) {
      console.log('Error!');
    });
  };

  vm.getCountries();
  vm.getCategories();

  vm.country = '';
  vm.category = '';
};
