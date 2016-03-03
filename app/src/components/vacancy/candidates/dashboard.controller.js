module.exports = function CandidatesDashboardController(vacancyResource, authService, positions) {
  const vm = this;
  vm.positions = positions.data;
  vm.resetFilter = resetFilter;

  authService.me().then((myself) => {
    vacancyResource
      .list({owner: myself._id})
      .then((vacancies) => vm.vacancies = vacancies);
  });

  // Reset filters query
  function resetFilter() {
    vm.position = {};
    vm.vacancy = {};
  }
};
