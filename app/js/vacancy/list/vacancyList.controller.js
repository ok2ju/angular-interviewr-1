module.exports = function VacancyListController(VacancyResource) {
  var vm = this;

  VacancyResource.listVacancies().then(function(vacancies) {
    vm.vacancies = vacancies;
  });
};
