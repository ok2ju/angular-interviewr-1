import {createResource} from './createResource';

export function SubscriptionResource(Vendor) {
  const {R} = Vendor;
  const RESOURCE_NAME = 'subscriptions';
  return createResource(RESOURCE_NAME, R);
}
