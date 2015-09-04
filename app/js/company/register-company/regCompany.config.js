module.exports = function($stateProvider) {
  $stateProvider
    .state('app.regCompany', {
      url: '/regcompany',
      templateUrl: 'js/company/register-company/register-company.html',
      controller: 'RegCompanyController',
      controllerAs: 'vm'
    });
};
