module.exports = function(Auth) {
    var vm = this;

    vm.login = login;

    function login() {
        Auth.login({
            username: vm.username,
            password: vm.password
        });
    }
};
