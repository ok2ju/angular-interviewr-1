import {createResource} from './createResource';

export function CommentResource(Vendor) {
  const {R} = Vendor;
  const RESOURCE_NAME = 'comments';
  return createResource(RESOURCE_NAME, R);
}
