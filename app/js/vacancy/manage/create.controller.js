module.exports = function VacancyCreateController(VacancyResource, MetaResource, $scope) {
  var vm = this;

  vm.vacancy = new VacancyResource();

  vm.registerVacancy = function() {
    vm.vacancy.$save(function() {
      toastr.success('Vacancy created.', 'Yay!');
      $state.go('app.vacancy');
    });
  }

  vm.getCountries = function() {
    MetaResource.getCountries().then(function(response) {
      vm.countries = response.data;
    }, function(error) {
      console.log('Error!');
    });
  };

  vm.getCategories = function() {
    MetaResource.getCategories().then(function(response) {
      vm.categories = response.data;
    }, function(error) {
      console.log('Error!');
    });
  };

  vm.getCountries();
  vm.getCategories();
}
