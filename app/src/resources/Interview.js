import {createResource} from './createResource';

export function InterviewResource(Vendor) {
  const {R} = Vendor;
  const RESOURCE_NAME = 'interview';
  return createResource(RESOURCE_NAME, R);
}
