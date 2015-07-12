module.exports = function($scope, CandidatesService) {
    CandidatesService.success(function(data) {
        $scope.candidates = data;
    });
};