module.exports = function VacancyProfileController(VacancyResource, $stateParams) {
  var vm = this;

  VacancyResource.oneVacancy($stateParams.id).then(function(vacancy) {
    vm.vacancy = vacancy;
  });
};
