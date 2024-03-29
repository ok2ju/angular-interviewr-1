module.exports = function VacancyCreateController($state, VacancyResource, 
  toastr, positions, vacancyTypes, companies) {

  var vm = this;
  vm.vacancy = {};
  vm.registerVacancy = registerVacancy;

  // Fetch data for positions dropdown
  vm.positions = positions.data;

  // Fetch data for vacancy types dropdown
  vm.vacancyTypes = vacancyTypes.data;

  vm.companies = companies;

  function registerVacancy() {
    vm.vacancy.company_id = vm.company._id;
    VacancyResource.postVacancy(vm.vacancy).then(function() {
      toastr.success('Vacancy created.', 'Yay!');
      $state.go('app.vacancy');
    }, function(err) {
        toastr.error('Error while creating vacancy.', 'Error!');
    });
  }
};
