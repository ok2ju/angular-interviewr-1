(function() {
  'use strict';

  require('angular').module('app.landing', ['ui.router'])
        .config(require('./landing.config'));
})();
