module.exports = function($stateProvider) {
  $stateProvider
    .state('intro.signup', {
      url: '/signup',
      controller: 'SignupController',
      templateUrl: 'src/user/signup/signup.tpl.html',
      controllerAs: 'vm',
      data: {
        pageTitle: 'SignUp'
      }
    });
};
