module.exports = function VacancyManageController(VacancyResource, $state, $stateParams, toastr) {
  var vm = this;

  VacancyResource.listVacancies({company_id: $stateParams.company_id}).then(function(vacancies) {
    vm.vacancies = vacancies;
  });

};
