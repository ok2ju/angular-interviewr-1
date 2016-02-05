import {createResource} from './createResource';

export function UserResource(Vendor) {
  const {R} = Vendor;
  const RESOURCE_NAME = 'users';

  return createResource(RESOURCE_NAME, R, {
    login(user) {
      return R.all('login').post(user);
    },

    companies(id) {
      return R.all(RESOURCE_NAME, id).getList('companies');
    }
  });
}