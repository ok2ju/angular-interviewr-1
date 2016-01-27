module.exports = function VacancyEditController($state, $stateParams, vacancyResource,
  toastr, positions, vacancyTypes) {

  var vm = this;

  vm.vacancy = {};
  vm.updateVacancy = updateVacancy;
  vm.deleteVacancy = deleteVacancy;

  // Fetch data for positions dropdown
  vm.positions = positions.data;

  // Fetch data for vacancy types dropdown
  vm.vacancyTypes = vacancyTypes.data;

  vacancyResource.oneVacancy($stateParams.id).then(function(vacancy) {
    vm.vacancy = vacancy;
  });

  function updateVacancy() {
    vm.vacancy.put().then(function() {
      $state.go('app.vacanciesManage.companies');
      toastr.success('Company settings was successfully updated.', 'Yay!');
    });
  }

  function deleteVacancy() {
    vacancyResource.remove(vm.vacancy._id).then(function() {
      $state.go('app.vacanciesManage.companies');
      toastr.success('Vacancy was successfully deleted.', 'Yay!');
    }, function(err) {
      console.log('Error while deleting vacancy!');
    });
  }

};
