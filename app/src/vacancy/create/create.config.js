module.exports = function($stateProvider) {
  $stateProvider
    .state('app.createVacancy', {
      url: '/vacancies/create',
      templateUrl: 'src/vacancy/create/create.html',
      controller: 'VacancyCreateController',
      controllerAs: 'vm',
      data: {
        requiresLogin: true,
        pageTitle: 'Create Vacancy'
      },
      resolve: {
        companyResource: 'CompanyResource',

        companies: function(myself, companyResource) {
          return companyResource.listCompanies({owner: myself._id});
        }
      }
    });
};
