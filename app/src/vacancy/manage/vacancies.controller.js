module.exports = function VacancyManageController(VacancyResource, $stateParams) {
  var vm = this;

  VacancyResource.listVacancies({company_id: $stateParams.id}).then(function(vacancies) {
    vm.vacancies = vacancies;
  });

};
