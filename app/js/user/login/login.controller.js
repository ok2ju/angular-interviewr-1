module.exports = function UserLoginController(UserResource, store, $state, toastr) {
  var vm = this;

  vm.user = {};
  vm.login = login;

  function login() {
    UserResource.login(vm.user).then(function(user) {
      store.set('jwt', user.id_token);
      $state.go('app.userSettings');
      toastr.success('You have successfully logged in.', 'Cheers!');
    }, function(err) {
        toastr.error('Invalid username or password.', 'Error!');
    });
  }
};
