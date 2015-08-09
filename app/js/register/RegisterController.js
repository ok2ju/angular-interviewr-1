module.exports = function(Auth) {
    var vm = this;

    vm.register = register;

    function register() {
        Auth.signup({
            username: vm.user.username,
            email: vm.user.email,
            password: vm.user.password
        });
    }
};
