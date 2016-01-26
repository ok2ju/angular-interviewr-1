module.exports = function VacancyListController(VacancyResource, countries, positions) {
  var vm = this;

  vm.subscribe = subscribe;
  vm.resetFilter = resetFilter;

  // Fetch data for countries dropdown
  vm.countries = countries.data;

  // Fetch data for positions dropdown
  vm.positions = positions.data;

  VacancyResource.listVacancies().then(function(vacancies) {
    vm.vacancies = vacancies;
  });

  function subscribe(vacancy) {
    VacancyResource.subscribe(vacancy).then(function() {
      console.log('success subscruption!');
    });
  }

  // Reset filters query
  function resetFilter() {
    vm.position = {};
    vm.vacancy = {};
    vm.country = {};
  }
};
