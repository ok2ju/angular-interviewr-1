module.exports = function(store, $http, $state, toastr, config) {
  var vm = this;
  var url = config.api_url + '/api/v1/users';

  vm.user = {};
  vm.register = register;

  function register() {
    $http({
      url: url,
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
