module.exports = function VacancyCreateController($state, VacancyResource, metaResource, toastr) {
  var vm = this;
  vm.vacancy = {};
  vm.registerVacancy = registerVacancy;

  metaResource.getVacancyPosition().then(function(positions) {
    vm.positions = positions.data;
  }, function(err) {
    console.log('Error fetching positions!');
  });

  metaResource.getVacancyType().then(function(types) {
    vm.vacancyTypes = types.data;
  }, function(err) {
    console.log('Error fetching vacancy types!');
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
