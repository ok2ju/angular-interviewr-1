module.exports = function VacancyProfileController(vacancyResource, $stateParams) {
  var vm = this;

  vm.subscribe = subscribe;

  vacancyResource.oneVacancy($stateParams.id).then(function(vacancy) {
    vm.vacancy = vacancy;
  });

  function subscribe(vacancy) {
    vacancyResource.subscribe(vacancy).then(function() {
      console.log('success subscruption!');
    });
  }
};
