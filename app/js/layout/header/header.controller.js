module.exports = function($state, $alert, store, jwtHelper) {
  var vm = this;

  var jwt = store.get('jwt');
  var decodedJwt = jwt && jwtHelper.decodeToken(jwt);

  vm.username = decodedJwt.username;

  vm.logout = logout;

  function logout() {
    store.remove('jwt');
    $state.go('intro.login');

    $alert({
      content: 'You have been logged out.',
      placement: 'top-right',
      type: 'info',
      duration: 3
    });
  }
};
