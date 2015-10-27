var moment = require('moment');

module.exports = function() {
  return function(dateString, format) {
    return moment(dateString).format(format);
  };
};
