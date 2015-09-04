module.exports = function(CandidatesService, $state) {
    var vm = this;

    $state.go('app.candidates.grid');

    CandidatesService.success(function(data) {
        vm.candidates = data;
    });
};
