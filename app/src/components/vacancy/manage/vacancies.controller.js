module.exports = function VacanciesListController(vacancyResource, $state, $stateParams) {
  const vm = this;

  vacancyResource.list({company_id: $stateParams.company_id}).then(function(vacancies) {
    vm.vacancies = vacancies;
  });

};
