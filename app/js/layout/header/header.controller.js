module.exports = function($state, toastr, store, jwtHelper, $http, config) {
  var vm = this;

  var jwt = store.get('jwt');
  var decodedJwt = jwt && jwtHelper.decodeToken(jwt);

  var url = config.api_url + '/api/v1/users/' + decodedJwt._id;

  vm.username = decodedJwt.username;

  function getUserInfo() {
    $http({
      url: url,
      method: 'GET'
    }).then(function(response) {
      vm.user = response.data;
    }, function(error) {
        console.log('Header info error!');
    });
  }

  getUserInfo();

  vm.getImageUrl = function() {
    var res = '';
    if(vm.user && vm.user.imageId) {
      res = config.api_url + '/api/v1/images/' + vm.user.imageId;
    } else {
      res = 'images/user-default.png';
    }
    return res;
  }

  vm.logout = logout;

  function logout() {
    store.remove('jwt');
    $state.go('intro.login');
    toastr.info('You have been logged out.', 'Info!');
  }
};
