module.exports = function UserSignupController(UserResource, store, $state, toastr) {
  var vm = this;

  vm.user = {};
  vm.register = register;

  function register() {
    UserResource.postUser(vm.user).then(function(user) {
      store.set('jwt', user.id_token);
      $state.go('app.userSettings');
      toastr.success('Your account has been created.', 'Congratulations!');
    }, function(err) {
        toastr.error('Something goes wrong.', 'Error!');
    });
  }

};
