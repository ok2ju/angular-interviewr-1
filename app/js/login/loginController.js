module.exports = function($location, AuthenticationService, FlashService) {
    var vm = this;

    vm.login = login;

    (function initController() {
        // reset login status
        AuthenticationService.ClearCredentials();
    })();

    function login() {
        vm.dataLoading = true;

        AuthenticationService.Login(vm.username, vm.password, function(responce) {
            if(responce.success) {
                AuthenticationService.SetCredentials(vm.username, vm.password);
                $location.path('/candidates');
            } else {
                FlashService.Error(responce.message);
                vm.dataLoading = false;
            }
        });
    }
};