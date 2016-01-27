import moment from 'moment';

module.exports = function MomentFilter() {
  return function(dateString, format) {
    return moment(dateString).format(format);
  };
};
