module.exports = function($stateProvider) {
  $stateProvider
    .state('app.candidates', {
      url: '/candidates',
      templateUrl: 'js/vacancy/candidates/candidates.html',
      controller: 'CandidatesController',
      controllerAs: 'vm',
      data: {
        requiresLogin: true,
        pageTitle: 'Candidates'
      }
    })
    .state('app.candidates.grid', {
      templateUrl: 'js/vacancy/candidates/views/grid-view.html'
    })
    .state('app.candidates.list', {
      templateUrl: 'js/vacancy/candidates/views/list-view.html'
    });
};
