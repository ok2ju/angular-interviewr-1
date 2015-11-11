require('angular').module('app.user.login', ['toastr'])
  .config(require('./login.config'))
  .controller('LoginController', require('./login.controller'));
