module.exports = function VacancyCreateController(vacancyResource, metaService, toastr, $scope) {
  var vm = this;

  vm.vacancy = new vacancyResource();

  vm.registerVacancy = function() {
    vm.vacancy.$save(function() {
      toastr.success('Vacancy created.', 'Yay!');
      $state.go('app.vacancy');
    });
  };

  vm.getCountries = function() {
    metaService.getCountries().then(function(response) {
      vm.countries = response.data;
    }, function(error) {
      console.log('Error!');
    });
  };

  vm.getCategories = function() {
    metaService.getCategories().then(function(response) {
      vm.categories = response.data;
    }, function(error) {
      console.log('Error!');
    });
  };

  vm.getCountries();
  vm.getCategories();
};
