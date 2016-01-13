require('angular')
  .module('app.resource.vacancy', ['restangular'])
    .factory('VacancyResource', vacancyResource);

function vacancyResource(Restangular) {

  var service = {
    listVacancies: listVacancies,
    oneVacancy: oneVacancy,
    postVacancy: postVacancy,
    update: update,
    remove: remove
  };

  function listVacancies(query) {
    return Restangular.all('vacancies').getList(query);
  }

  function oneVacancy(id) {
    return Restangular.one('vacancies', id).get();
  }

  function postVacancy(vacancy) {
    return Restangular.all('vacancies').post(vacancy);
  }

  function update(id, data) {
    return Restangular.one('vacancies', id).customPUT(data);
  }

  function remove(id) {
    return Restangular.one('vacancies', id).remove();
  }

  return service;
}
