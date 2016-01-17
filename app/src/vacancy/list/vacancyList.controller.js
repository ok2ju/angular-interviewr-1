module.exports = function VacancyListController(VacancyResource) {
  var vm = this;

  vm.subscribe = subscribe;

  VacancyResource.listVacancies().then(function(vacancies) {
    vm.vacancies = vacancies;
  });

  function subscribe(vacancy) {
    VacancyResource.subscribe(vacancy).then(function() {
      console.log('success subscruption!');
    });
  }
};
