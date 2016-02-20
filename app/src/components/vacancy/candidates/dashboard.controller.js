module.exports = function CandidatesDashboardController(vacancyResource, authService) {
  const vm = this;

  authService.me().then((myself) => {
    vacancyResource
      .list({owner: myself._id})
      .then((vacancies) => vm.vacancies = vacancies);
  });
};
