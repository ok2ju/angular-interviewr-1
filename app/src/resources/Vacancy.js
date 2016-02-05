import {createResource} from './createResource';

export function VacancyResource(Vendor) {
  const {R} = Vendor;
  const RESOURCE_NAME = 'vacancies';

  return createResource(RESOURCE_NAME, R, {
    subscriptions(id) {
      return R.one(RESOURCE_NAME, id).all('subscriptions').getList();
    },

    subscribe(vacancy) {
      return R.all(`${RESOURCE_NAME}/subscribe`).post(vacancy);
    },

    unsubscribe(vacancy) {
      return R.all(`${RESOURCE_NAME}/unsubscribe`).post(vacancy);
    }
  });
}