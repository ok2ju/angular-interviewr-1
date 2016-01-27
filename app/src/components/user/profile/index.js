import angular from 'angular';

angular
  .module('app.user.profile', [])
    .controller('UserProfileController', require('./userProfile.controller'));
