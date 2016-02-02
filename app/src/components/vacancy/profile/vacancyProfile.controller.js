module.exports = function VacancyProfileController(vacancyResource, $stateParams, imageService) {
  var vm = this;

  vm.subscribe = subscribe;
  vm.getUserImageUrl = getUserImageUrl;

  vacancyResource.oneVacancy($stateParams.id).then(function(vacancy) {
    vm.vacancy = vacancy;
  });

  vacancyResource.subscriptions($stateParams.id).then(subscriptions => vm.subscriptions = subscriptions);

  function subscribe(vacancy) {
    vacancyResource.subscribe(vacancy).then(function() {
      console.log('success subscruption!');
    });
  }

  function getUserImageUrl(user) {
    return imageService.getImageUrl(user, 'assets/images/user-default.png');
  }

};
