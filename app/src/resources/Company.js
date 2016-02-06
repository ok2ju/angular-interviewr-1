import {createResource} from './createResource';

export function CompanyResource(Vendor) {
  const {R} = Vendor;
  const RESOURCE_NAME = 'companies';
  return createResource(RESOURCE_NAME, R, {
    delete(id) {
      return R.one(RESOURCE_NAME, id).remove();
    }
  });
}
