module.exports = function($scope, $stateParams, ShowsService) {
    $scope.selectedShow = ShowsService.find($stateParams.id);
};