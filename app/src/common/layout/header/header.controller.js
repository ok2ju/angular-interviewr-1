import {ROOT_DIR} from '../../../constants';

export function LayoutHeaderController($state, toastr, store, jwtHelper, $http, config) {
  const vm = this;

  const jwt = store.get('jwt');
  const decodedJwt = jwt && jwtHelper.decodeToken(jwt);

  const url = config.api_url + '/api/v1/users/' + decodedJwt._id;

  vm.getImageUrl = getImageUrl;
  vm.logout = logout;
  vm.isActivity = false;
  vm.toggleActivity = toggleActivity;
  getUserInfo();

  function getUserInfo() {
    $http({
      url: url,
      method: 'GET'
    }).then(function(response) {
      vm.user = response.data;
    }, function(error) {
        console.log('Header info error!', error);
    });
  }

  function getImageUrl() {
    let res = '';
    if(vm.user && vm.user.imageId) {
      res = config.api_url + '/api/v1/images/' + vm.user.imageId;
    } else {
      res = `${ROOT_DIR}/assets/images/user-default.png`;
    }
    return res;
  }

  function logout() {
    store.remove('jwt');
    $state.go('intro.login');
    toastr.info('You have been logged out.', 'Info!');
  }

  function toggleActivity() {
    vm.isActivity = !vm.isActivity;
  }
}
