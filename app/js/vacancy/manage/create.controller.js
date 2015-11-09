module.exports = function VacancyCreateController(vacancyResource, metaResource, $scope) {
  var vm = this;

  vm.vacancy = new vacancyResource();

  vm.registerVacancy = function() {
    vm.vacancy.$save(function() {
      toastr.success('Vacancy created.', 'Yay!');
      $state.go('app.vacancy');
    });
  };

  vm.getCountries = function() {
    metaResource.getCountries().then(function(response) {
      vm.countries = response.data;
    }, function(error) {
      console.log('Error!');
    });
  };

  vm.getCategories = function() {
    metaResource.getCategories().then(function(response) {
      vm.categories = response.data;
    }, function(error) {
      console.log('Error!');
    });
  };

  vm.getCountries();
  vm.getCategories();
};
