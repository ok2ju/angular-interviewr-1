import moment from 'moment';

export function MomentFilter() {
  return function(dateString, format) {
    return moment(dateString).format(format);
  };
}
