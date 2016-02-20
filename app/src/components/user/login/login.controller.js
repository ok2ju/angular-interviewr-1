module.exports = function UserLoginController(Vendor, authService, $state, toastr) {
  const vm = this;

  const logger = Vendor.logger.get('UserLoginController');

  vm.user = {};
  vm.login = login;

  function login() {
    authService.login(vm.user).then((user) => {
      $state.go('app.userSettings.general', {});
      toastr.success('You have successfully logged in.', 'Cheers!');
      logger.debug('login success: ', user);
    }).catch((err) => {
      toastr.error('Invalid username or password.', 'Error!');
      logger.error('login err: ', err);
    });
  }
};
