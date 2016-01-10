module.exports = function($stateProvider) {
  $stateProvider
    .state('intro.login', {
      url: '/login',
      controller: 'LoginController',
      templateUrl: 'src/user/login/login.tpl.html',
      controllerAs: 'vm',
      data: {
        pageTitle: 'Login'
      }
    });
};
