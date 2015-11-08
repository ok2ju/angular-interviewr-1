var $ = require('jquery');

module.exports = function SettingsController(store, jwtHelper,
                      toastr, $state, $http, $rootScope, $uibModal,
                      config, Upload, UserResource) {
  var vm = this;

  var jwt = store.get('jwt');
  var decodedJwt = jwt && jwtHelper.decodeToken(jwt);

  UserResource.get({ id: decodedJwt._id }, function(data) {
    vm.user = data;
    vm.user.social = vm.user.social || {};
  });

  vm.updateProfile = updateProfile;
  vm.loadTags = loadTags;

  vm.getImageUrl = function() {
    var res = '';
    if(vm.user && vm.user.imageId) {
      res = config.api_url + '/api/v1/images/' + vm.user.imageId;
    } else {
      res = 'images/user-default.png';
    }
    return res;
  }

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

  //file upload

  vm.onFileSelected = function() {
    if(vm.file) {
      vm.open();
    }
  };

  vm.openFileDialog = function() {
    $('#up-photo').click();
  };

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
        file: function () {
          return vm.file;
        },
        user: function() {
          return vm.user;
        }
      }
    });
  };

  vm.toggleAnimation = function () {
    vm.animationsEnabled = !vm.animationsEnabled;
  };
};
