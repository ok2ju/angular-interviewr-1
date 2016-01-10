module.exports = function($stateProvider) {
  $stateProvider
    .state('intro.landing', {
      url:'/',
      templateUrl: 'common/layout/landing/landing.tpl.html',
      data: {
        pageTitle: 'Landing'
      }
    });
};
