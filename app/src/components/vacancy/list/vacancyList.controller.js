module.exports = function VacancyListController(vacancyResource, positions) {
  var vm = this;

  vm.subscribe = subscribe;
  vm.resetFilter = resetFilter;

  // Fetch data for positions dropdown
  vm.positions = positions.data;

  vacancyResource.listVacancies().then(function(vacancies) {
    vm.vacancies = vacancies;
  });

  function subscribe(vacancy) {
    vacancyResource.subscribe(vacancy).then(function() {
      console.log('success subscruption!');
    });
  }

  // Reset filters query
  function resetFilter() {
    vm.position = {};
    vm.vacancy = {};
  }
};
