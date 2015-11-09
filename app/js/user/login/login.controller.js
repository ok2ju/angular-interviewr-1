module.exports = function UserLoginController(store, $state, $http, toastr, config) {
  var vm = this;
  var login_url = config.api_url + '/api/v1/login';

  vm.user = {};
  vm.login = login;

  function login() {
    $http({
      url: login_url,
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
