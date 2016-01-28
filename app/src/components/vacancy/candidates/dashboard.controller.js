module.exports = function CandidatesDashboardController(vacancyResource, myself) {
  var vm = this;

  vacancyResource.listVacancies({owner: myself._id}).then(function(vacancies) {
    vm.vacancies = vacancies;
  });
};
