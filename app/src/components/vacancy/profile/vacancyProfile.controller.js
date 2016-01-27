module.exports = function VacancyProfileController(vacancyResource, $stateParams) {
  var vm = this;

  vacancyResource.oneVacancy($stateParams.id).then(function(vacancy) {
    vm.vacancy = vacancy;
  });
};
