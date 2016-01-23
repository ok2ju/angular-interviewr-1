var moment = require('moment');

require('angular')
  .module('app.filter.date', [])
    .filter('moment', momentFilter);

function momentFilter() {
  return function(dateString, format) {
    return moment(dateString).format(format);
  };
}
