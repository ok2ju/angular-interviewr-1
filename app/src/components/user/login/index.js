import angular from 'angular';

angular
  .module('app.user.login', ['toastr'])
    .controller('LoginController', require('./login.controller'));
