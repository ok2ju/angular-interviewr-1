module.exports = function VacancyManageController(VacancyResource, $state, $stateParams, toastr) {
  var vm = this;

  vm.deleteVacancy = deleteVacancy;

  VacancyResource.listVacancies({company_id: $stateParams.company_id}).then(function(vacancies) {
    vm.vacancies = vacancies;
  });

  function deleteVacancy(id) {
    VacancyResource.remove(id).then(function() {
      $state.go($state.current, {}, { reload: true });
      toastr.success('Vacancy was successfully deleted.', 'Yay!');
    }, function(err) {
      console.log('Error while deleting vacancy!');
    });
  }

};
