module.exports = function($state, toastr, store, jwtHelper) {
  var vm = this;

  var jwt = store.get('jwt');
  var decodedJwt = jwt && jwtHelper.decodeToken(jwt);

  vm.username = decodedJwt.username;

  vm.logout = logout;

  function logout() {
    store.remove('jwt');
    $state.go('intro.login');
    toastr.info('You have been logged out.', 'Info!');
  }
};
