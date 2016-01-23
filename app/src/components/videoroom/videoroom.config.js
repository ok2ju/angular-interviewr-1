module.exports = function($stateProvider) {
  $stateProvider
    .state('app.videoroom', {
      url: '/videoroom',
      templateUrl: 'src/videoroom/videoroom.tpl.html',
      controller: 'VideoRoomCtrl',
      controllerAs: 'vm',
      data: {
        requiresLogin: true,
        pageTitle: 'Video Room'
      }
    });
};
