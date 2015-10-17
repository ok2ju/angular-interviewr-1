module.exports = function(UserSettingsService, store, jwtHelper,
                      toastr, $state, $http, $rootScope, $uibModal) {
  var vm = this;

  var jwt = store.get('jwt');
  var decodedJwt = jwt && jwtHelper.decodeToken(jwt);

  UserSettingsService.get({ id: decodedJwt._id }, function(data) {
    vm.user = data;
    vm.user.social = vm.user.social || {};
  });

  vm.updateProfile = updateProfile;
  vm.loadTags = loadTags;

  function updateProfile() {
    console.log(vm.user.social);
    vm.user.$update(function() {
      $state.go($state.current, {}, { reload: true });
      toastr.success('Your settings was successfully updated.', 'Yay!');
    });
  }

  function loadTags(query) {
    return $http.get('./api/tags.json');
  }

  // modal window

  vm.animationsEnabled = true;

  vm.open = function (size) {

    var modalInstance = $uibModal.open({
      animation: vm.animationsEnabled,
      templateUrl: 'js/user/settings/modal.html',
      controller: 'ModalInstanceController',
      controllerAs: 'vm',
      size: size,
      resolve: {
        /*items: function () {
          return $scope.items;
        }*/
      }
    });

    modalInstance.result.then(function (selectedItem) {
      vm.selected = selectedItem;
    }, function () {
      console.log('Modal dismissed at: ' + new Date());
    });
  };

  vm.toggleAnimation = function () {
    vm.animationsEnabled = !vm.animationsEnabled;
  };
};