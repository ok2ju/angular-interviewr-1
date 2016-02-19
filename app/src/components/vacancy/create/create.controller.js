module.exports = function VacancyCreateController($state, vacancyResource,
  toastr, positions, vacancyTypes, companies) {

  var vm = this;
  vm.vacancy = {};
  vm.registerVacancy = registerVacancy;

  // Fetch data for positions dropdown
  vm.positions = positions.data;

  // Fetch data for vacancy types dropdown
  vm.vacancyTypes = vacancyTypes.data;

  vm.company = {};
  vm.companies = companies;

  function registerVacancy(isValid) {
    if(isValid) {
      vacancyResource.create(vm.vacancy).then(function() {
        toastr.success('Vacancy created.', 'Yay!');
        $state.go('app.vacanciesList');
      }, function(err) {
          toastr.error('Error while creating vacancy.', 'Error!');
      });
    }
  }

};
