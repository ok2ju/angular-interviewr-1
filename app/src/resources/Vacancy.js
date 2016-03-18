import {createResource} from './createResource';

export function VacancyResource(Vendor) {
  const {R} = Vendor;
  const RESOURCE_NAME = 'vacancies';

  return createResource(RESOURCE_NAME, R);
}
