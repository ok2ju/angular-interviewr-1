import {createResource} from './createResource';

export function VacancyResource(Vendor) {
  const {R} = Vendor;
  const RESOURCE_NAME = 'vacancies';

  return createResource(RESOURCE_NAME, R, {
    subscriptions(query) {
      return R.all('subscriptions').getList(query || {});
    },

    subscribe(id) {
      return R.all(`subscriptions`).post(id);
    },

    unsubscribe(id) {
      return R.one('subscriptions', id).remove();
    }
  });
}
