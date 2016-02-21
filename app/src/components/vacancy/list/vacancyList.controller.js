module.exports = function VacancyListController(vacancyResource, positions) {
  const vm = this;

  /*vm.subscribe = subscribe;*/
  vm.resetFilter = resetFilter;

  // Fetch data for positions dropdown
  vm.positions = positions.data;

  vacancyResource.list().then(function(vacancies) {
    vm.vacancies = vacancies;
  });

  /*function subscribe(vacancy) {
    vacancyResource.subscribe(vacancy).then(function() {
      console.log('success subscruption!');
    });
  }*/

  // Reset filters query
  function resetFilter() {
    vm.position = {};
    vm.vacancy = {};
  }
};
