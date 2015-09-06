module.exports = function(UserSettingsService, store, jwtHelper, toastr, $state) {
  var vm = this;

  var jwt = store.get('jwt');
  var decodedJwt = jwt && jwtHelper.decodeToken(jwt);

  vm.user = UserSettingsService.get({ id: decodedJwt._id });

  vm.updateProfile = updateProfile;

  function updateProfile() {
    vm.user.$update(function() {
      $state.go($state.current, {}, { reload: true });
      toastr.success('Your settings was successfully updated.', 'Yay!');
    });
  }
};
