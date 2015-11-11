module.exports = function VacancyCreateController(VacancyResource, metaResource, toastr) {
  var vm = this;
  vm.vacancy = {};
  vm.registerVacancy = registerVacancy;

  metaResource.getCountries().then(function(countries) {
    vm.countries = countries;
  }, function(err) {
    console.log('Error fetching countries!');
  });

  metaResource.getCategories().then(function(categories) {
    vm.categories = categories;
  }, function(err) {
    console.log('Error fetching categories!');
  });

  function registerVacancy() {
    VacancyResource.postVacancy(vm.vacancy).then(function() {
      toastr.success('Vacancy created.', 'Yay!');
      $state.go('app.vacancy');
    }, function(err) {
        toastr.error('Error while creating vacancy.', 'Error!');
    });
  }
};
