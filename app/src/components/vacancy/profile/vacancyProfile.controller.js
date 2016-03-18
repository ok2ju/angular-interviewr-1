import _ from 'lodash';

module.exports = function VacancyProfileController(vacancyResource, subscriptionResource, $stateParams, imageService,
                                                    authService, toastr, config, $state) {
  const vm = this;

  vm.getUserImageUrl = imageService.getUserImageUrl;

  vacancyResource.one($stateParams.id)
    .then(function(vacancy) {
      vm.vacancy = vacancy;
    });

  authService.me().then((myself) => {

    subscriptionResource.list({vacancy: $stateParams.id})
    .then(subscriptions => {
      vm.subscriptions = subscriptions;

      vm.isSubscribed = function(vacancy) {
        var index = _.find(subscriptions, function(o) {
          return o.candidate._id == myself._id;
        });

        return index ? true : false;
      };

      vm.subscribe = function(vacancy) {
        subscriptionResource.create({vacancy: vacancy._id}).then(function() {
          $state.go($state.current, {}, { reload: true });
          toastr.success('You are successful subscribed', 'Yay!');
        });
      };

      vm.unsubscribe = function() {
        var subscription = _.find(subscriptions, function(o) {
          return o.candidate._id == myself._id;
        });

        subscriptionResource.delete(subscription._id).then(function() {
          $state.go($state.current, {}, { reload: true });
          toastr.error('You are unsubscribed', 'Yay!');
        });
      };

    });
  });

  const urlTransformer = (url) => {
    return (!_.isEmpty(url)) ? `${config.ROOT_DIR}/${url}`: url;
  };

  const images = _.mapValues({
    'Developer': 'assets/images/icons/vacancies/coder.png',
    'Analythyc': 'assets/images/icons/vacancies/analythic.png',
    'Human Resource': 'assets/images/icons/vacancies/hr.png',
    'Sales Manager': 'assets/images/icons/vacancies/sales.png',
    'Project Manager': 'assets/images/icons/vacancies/pm.png'
  }, urlTransformer);

  vm.getImage = function(vacancyType) {
    return images[vacancyType];
  };

};
