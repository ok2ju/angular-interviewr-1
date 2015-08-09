module.exports = function(Auth) {
  var vm = this;

  var user = sessionStorage.getItem('currentUser');
  var actualUserObj = JSON.parse(user);

  vm.username = actualUserObj.username;

  vm.logout = logout;

  function logout() {
    Auth.logout();
  }
};
