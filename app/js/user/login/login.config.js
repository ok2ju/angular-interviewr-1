module.exports = function($stateProvider) {
  $stateProvider
    .state('intro.login', {
      url: '/login',
      controller: 'LoginController',
      templateUrl: 'js/user/login/login.html',
      controllerAs: 'vm'
    });
};
