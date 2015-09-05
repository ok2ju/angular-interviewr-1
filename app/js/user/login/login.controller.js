module.exports = function(store, $state, $http, $alert) {
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
      $alert({
        title: 'Cheers!',
        content: 'You have successfully logged in.',
        placement: 'top-right',
        type: 'success',
        duration: 3
      });
    }, function(error) {
        $alert({
          title: 'Error!',
          content: 'Invalid username or password.',
          placement: 'top-right',
          type: 'danger',
          duration: 3
        });
    });
  }
};
