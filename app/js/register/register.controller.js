module.exports = function(store, $http, $state, $alert) {
  var vm = this;

  vm.user = {};
  vm.register = register;

  function register() {
    $http({
      url: 'http://localhost:3000/api/users',
      method: 'POST',
      data: vm.user
    }).then(function(response) {
      store.set('jwt', response.data.id_token);
      $state.go('app.fillprofile');
      $alert({
        title: 'Congratulations!',
        content: 'Your account has been created.',
        placement: 'top-right',
        type: 'success',
        duration: 3
      });
    }, function(error) {
        $alert({
          title: 'Error!',
          content: response.data,
          placement: 'top-right',
          type: 'danger',
          duration: 3
        });
    });
  }
};
