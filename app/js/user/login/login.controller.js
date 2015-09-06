module.exports = function(store, $state, $http, toastr) {
  var vm = this;

  vm.user = {};
  vm.login = login;

  function login() {
    $http({
      url: 'http://localhost:3000/api/login',
      method: 'POST',
      data: vm.user
    }).then(function(response) {
      store.set('jwt', response.data.id_token);
      $state.go('app.userSettings');
      toastr.success('You have successfully logged in.', 'Cheers!');

    }, function(error) {
        toastr.error('Invalid username or password.', 'Error!');
    });
  }
};
