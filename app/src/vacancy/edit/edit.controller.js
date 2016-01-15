module.exports = function VacancyEditController($state, $stateParams, VacancyResource,
  toastr, positions, vacancyTypes, companies) {

  var vm = this;

  vm.vacancy = {};
  vm.updateVacancy = updateVacancy;

  VacancyResource.oneVacancy($stateParams.id).then(function(vacancy) {
    vm.vacancy = vacancy;
  });

  function updateVacancy() {
    vm.vacancy.put().then(function() {
      $state.go('app.vacanciesManage.companies');
      toastr.success('Company settings was successfully updated.', 'Yay!');
    });
  }
};
