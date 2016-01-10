require('angular')
  .module('app.resource.vacancy', ['restangular'])
    .factory('VacancyResource', vacancyResource);

function vacancyResource(Restangular) {

  var service = {
    listVacancies: listVacancies,
    oneVacancy: oneVacancy,
    postVacancy: postVacancy
  };

  function listVacancies() {
    return Restangular.all('vacancies').getList();
  }

  function oneVacancy(id) {
    return Restangular.one('vacancies', id).get();
  }

  function postVacancy(vacancy) {
    return Restangular.all('vacancies').post(vacancy);
  }

  return service;
}
