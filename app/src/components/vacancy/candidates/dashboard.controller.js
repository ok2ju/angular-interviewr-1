module.exports = function CandidatesDashboardController(vacancyResource, myself) {
  const vm = this;

  vacancyResource.list({owner: myself._id}).then(function(vacancies) {
    vm.vacancies = vacancies;
  });
};
