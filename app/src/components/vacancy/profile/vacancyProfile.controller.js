module.exports = function VacancyProfileController(vacancyResource, $stateParams, imageService) {
  const vm = this;

  vm.subscribe = subscribe;
  vm.getUserImageUrl = imageService.getUserImageUrl;

  vacancyResource.one($stateParams.id).then(function(vacancy) {
    vm.vacancy = vacancy;
  });

  vacancyResource.subscriptions($stateParams.id).then(subscriptions => vm.subscriptions = subscriptions);

  function subscribe(vacancy) {
    vacancyResource.subscribe(vacancy).then(function() {
      console.log('success subscruption!');
    });
  }
};
