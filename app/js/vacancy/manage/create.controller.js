module.exports = function VacancyCreateController($state, VacancyResource, toastr, positions, vacancyTypes) {
  var vm = this;
  vm.vacancy = {};
  vm.registerVacancy = registerVacancy;

  // Fetch data for positions dropdown
  vm.positions = positions.data;

  // Fetch data for vacancy types dropdown
  vm.vacancyTypes = vacancyTypes.data;

  function registerVacancy() {
    VacancyResource.postVacancy(vm.vacancy).then(function() {
      toastr.success('Vacancy created.', 'Yay!');
      $state.go('app.vacancy');
    }, function(err) {
        toastr.error('Error while creating vacancy.', 'Error!');
    });
  }
};
