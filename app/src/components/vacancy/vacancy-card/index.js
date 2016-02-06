export function VacancyCard(config) {
  return {
    restrict: 'E',
    scope: {
      vacancy: '=',
      withFollow: '=',
      editable: '='
    },
    transclude: true,
    templateUrl: `${config.ROOT_DIR}/src/components/vacancy/vacancy-card/vacancy-card.directive.html`,
    controller(Vendor, $scope, vacancyResource) {
      const {_} = Vendor;

      $scope.settings = {
        withFollowButton: $scope.withFollow || false,
        withEditButton: $scope.editable || false
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
      };

      $scope.subscribe = vacancyResource.subscribe;
    }
  };
}


