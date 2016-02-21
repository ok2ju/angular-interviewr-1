import moment from 'moment';

export function FromNowFilter() {
  return function(date) {
    return moment(date).fromNow();
  };
}
