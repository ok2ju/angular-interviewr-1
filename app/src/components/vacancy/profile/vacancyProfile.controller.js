import _ from 'lodash';

module.exports = function VacancyProfileController(vacancyResource, $stateParams, imageService,
                                                    authService, toastr) {
  const vm = this;

  vm.getUserImageUrl = imageService.getUserImageUrl;

  vacancyResource.one($stateParams.id)
    .then(function(vacancy) {
      vm.vacancy = vacancy;
    });

  vacancyResource.subscriptions($stateParams.id)
    .then(subscriptions => vm.subscriptions = subscriptions);

  authService.me().then((myself) => {
    vm.isSubscribed = function(vacancy) {
      var index = _.find(vacancy.subscriptions, function(o) {
        return o.candidate == myself._id;
      });

      return index ? true : false;
    };

    vm.subscribe = function(vacancy) {
      vacancyResource.subscribe(vacancy).then(function() {
        vacancy.subscriptions.push({ candidate: myself._id });
        toastr.success('You are successful subscribed', 'Yay!');
      });
    };

    vm.unsubscribe = function(vacancy) {
      vacancyResource.unsubscribe(vacancy).then(function() {
        var index = vacancy.subscriptions.indexOf(myself._id);
        vacancy.subscriptions.splice(index, 1);
        toastr.error('You are unsubscribed', 'Yay!');
      });
    };

  });

};
