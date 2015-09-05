module.exports = function(UserSettingsService, store, jwtHelper, $alert, $state) {
  var vm = this;

  var jwt = store.get('jwt');
  var decodedJwt = jwt && jwtHelper.decodeToken(jwt);

  vm.user = UserSettingsService.get({ id: decodedJwt._id });

  vm.updateProfile = updateProfile;

  function updateProfile() {
    vm.user.$update(function() {
      $alert({
        title: 'Updated!',
        content: 'Your settings was successfully updated.',
        placement: 'top-right',
        type: 'success',
        duration: 3
      });

      $state.go($state.current, {}, { reload: true });
    });
  }
};
