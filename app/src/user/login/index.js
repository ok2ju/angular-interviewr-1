require('angular').module('app.user.login', [
  'app.resource.user',
  'toastr'
  ])
  .controller('LoginController', require('./login.controller'));
