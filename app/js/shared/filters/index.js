(function() {
  'use strict';

  require('angular')
    .module('app.shared.filters', [])
      .filter('moment', require('./dateFilter'))
      .filter('categoryFilter', require('./categoryFilter'));
})();
