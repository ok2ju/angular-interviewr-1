import angular from 'angular';

angular
  .module('app.videoroom', [])
    .config(require('./videoroom.config'))
    .controller('VideoRoomCtrl', require('./videoroom.controller'));
