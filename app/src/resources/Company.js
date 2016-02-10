import {createResource} from './createResource';

export function CompanyResource(Vendor) {
  const {R} = Vendor;
  const RESOURCE_NAME = 'companies';

  return createResource(RESOURCE_NAME, R, {
    comment(id, commentObj) {
      return R.one(RESOURCE_NAME, id).all('comments').post(commentObj);
    }
  });
}
