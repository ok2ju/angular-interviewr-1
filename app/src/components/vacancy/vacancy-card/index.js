import _ from 'lodash';

export function VacancyCard(config) {
  return {
    restrict: 'E',
    scope: {
      vacancy: '=',
      withFollow: '=',
      editable: '=',
      withCandidates: '='
    },
    transclude: true,
    templateUrl: `${config.ROOT_DIR}/src/components/vacancy/vacancy-card/vacancy-card.directive.html`,
    controller(Vendor, $scope, $state, vacancyResource, authService, toastr) {
      const {_} = Vendor;

      $scope.settings = {
        withFollowButton: $scope.withFollow || false,
        withEditButton: $scope.editable || false,
        withCandidates: $scope.withCandidates || false
      };

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

      $scope.getImage = function(vacancyType) {
        return images[vacancyType];
      }

      authService.me().then((myself) => {
        var subs;

        vacancyResource.subscriptions({candidate: myself._id}).then(function(subscriptions) {
          subs = subscriptions;

          $scope.isSubscribed = function(vacancy) {
            var index = _.find(subs, function(o) {
              return o.vacancy._id == vacancy._id;
            });

            return index ? true : false;
          };

          $scope.subscribe = function(vacancy) {
            vacancyResource.subscribe({vacancy: vacancy._id}).then(function() {
              /*vacancy.subscriptions.push({ candidate: myself._id });*/
              $state.go($state.current, {}, { reload: true });
              toastr.success('You are successful subscribed', 'Yay!');
            });
          };

          $scope.unsubscribe = function(vacancy) {
            var subscription = _.find(subs, function(o) {
              return o.vacancy._id == vacancy._id;
            });

            vacancyResource.unsubscribe(subscription._id).then(function() {
              /*var index = vacancy.subscriptions.indexOf(myself._id);
              vacancy.subscriptions.splice(index, 1);*/
              $state.go($state.current, {}, { reload: true });
              toastr.error('You are unsubscribed', 'Yay!');
            });
          };

        });

      });

    }
  };
}
