module.exports = function VacanciesListController(vacancyResource, $state, $stateParams, toastr) {
  var vm = this;

  vacancyResource.listVacancies({company_id: $stateParams.company_id}).then(function(vacancies) {
    vm.vacancies = vacancies;
  });

};
