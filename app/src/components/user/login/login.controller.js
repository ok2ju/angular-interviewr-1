module.exports = function UserLoginController(userResource, store, $state, toastr) {
  var vm = this;

  vm.user = {};
  vm.login = login;

  function login() {
    userResource.login(vm.user).then(function(user) {
      store.set('jwt', user.id_token);
      $state.go('app.userSettings.general');
      toastr.success('You have successfully logged in.', 'Cheers!');
    }, function(err) {
        toastr.error('Invalid username or password.', 'Error!');
    });
  }
};
