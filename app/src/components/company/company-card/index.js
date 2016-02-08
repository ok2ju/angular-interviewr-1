export function CompanyCard(config) {
  return {
    restrict: 'E',
    scope: {
      company: '=',
      editable: '='
    },
    transclude: true,
    templateUrl: `${config.ROOT_DIR}/src/components/company/company-card/company-card.tpl.html`,
    controller(Vendor, $scope, companyResource, imageService) {
      const {_} = Vendor;

      $scope.settings = {
        withEditButton: $scope.editable || false,
      };

      const urlTransformer = (url) => {
        return (!_.isEmpty(url)) ? `${config.ROOT_DIR}/${url}`: url;
      };

      $scope.getImageUrl = imageService.getCompanyImageUrl;
      $scope.getUserImageUrl = imageService.getUserImageUrl;
    }
  };
}
