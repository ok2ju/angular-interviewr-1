module.exports = function($stateProvider) {
  $stateProvider
    .state('app.videoroom', {
      url: '/videoroom',
      templateUrl: 'js/videoroom/videoroom.html',
      controller: 'VideoRoomCtrl',
      controllerAs: 'vm',
      data: {
        requiresLogin: true,
        pageTitle: 'Video Room'
      }
    });
};
