module.exports = function($stateProvider) {
  $stateProvider
    .state('intro.signup', {
      url: '/signup',
      controller: 'SignupController',
      templateUrl: 'js/user/signup/signup.html',
      controllerAs: 'vm',
      data: {
        pageTitle: 'SignUp'
      }
    });
};
