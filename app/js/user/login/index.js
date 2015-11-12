require('angular').module('app.user.login', [
  'app.resource.user',
  'toastr'
  ])
  .config(require('./login.config'))
  .controller('LoginController', require('./login.controller'));
