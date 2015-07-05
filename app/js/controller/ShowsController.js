module.exports = function($scope, ShowsService) {
    $scope.shows = ShowsService.list();
};