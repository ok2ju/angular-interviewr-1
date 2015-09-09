module.exports = function(store, $http, $state, toastr) {
  var vm = this;

  vm.user = {};
  vm.register = register;

  function register() {
    $http({
      url: 'http://localhost:3000/api/v1/users',
      method: 'POST',
      data: vm.user
    }).then(function(response) {
      store.set('jwt', response.data.id_token);
      $state.go('app.userSettings');
      toastr.success('Your account has been created.', 'Congratulations!');
    }, function(error) {
        toastr.error('Something goes wrong.', 'Error!');
    });
  }
};
