module.exports = function($stateProvider) {
  $stateProvider
    .state('app.candidates', {
      url: '/candidates',
      templateUrl: 'src/vacancy/candidates/candidates.tpl.html',
      controller: 'CandidatesController',
      controllerAs: 'vm',
      data: {
        requiresLogin: true,
        pageTitle: 'Candidates'
      }
    })
    .state('app.candidates.grid', {
      templateUrl: 'src/vacancy/candidates/views/grid-view.tpl.html'
    })
    .state('app.candidates.list', {
      templateUrl: 'src/vacancy/candidates/views/list-view.tpl.html'
    });
};
