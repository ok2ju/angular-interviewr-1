module.exports = function VacancyResource(Restangular) {

  var service = {
    listVacancies: listVacancies,
    oneVacancy: oneVacancy,
    postVacancy: postVacancy,
    update: update,
    remove: remove,
    subscribe: subscribe,
    unsubscribe: unsubscribe
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

  function subscribe(vacancy) {
    return Restangular.all('vacancies/subscribe').post(vacancy);
  }

  function unsubscribe(vacancy) {
    return Restangular.all('vacancies/unsubscribe').post(vacancy);
  }

  return service;
};
