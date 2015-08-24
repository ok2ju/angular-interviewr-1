module.exports = function($http, $location, $cookies, $alert, $window) {
  $window.sessionStorage.setItem('currentUser', $cookies.get('user'));

  return {
    login: function(user) {
      return $http({
        method: 'POST',
        url: 'http://localhost:3000/api/login',
        withCredentials: true,
        data: user
      }).success(function(data) {
          $window.sessionStorage.setItem('currentUser', JSON.stringify(data));
          $location.path('/fillprofile');

          $alert({
            title: 'Cheers!',
            content: 'You have successfully logged in.',
            placement: 'top-right',
            type: 'success',
            duration: 3
          });
      }).error(function() {
          $alert({
            title: 'Error!',
            content: 'Invalid username or password.',
            placement: 'top-right',
            type: 'danger',
            duration: 3
          });
        });
    },
    signup: function(user) {
      return $http.post('http://localhost:3000/api/signup', user).success(function(data) {
        $location.path('/login');

        $alert({
          title: 'Congratulations!',
          content: 'Your account has been created.',
          placement: 'top-right',
          type: 'success',
          duration: 3
        });
      }).error(function(response) {
          $alert({
            title: 'Error!',
            content: response.data,
            placement: 'top-right',
            type: 'danger',
            duration: 3
          });
        });
    },
    logout: function() {
      return $http.get('http://localhost:3000/api/logout').success(function() {
        $window.sessionStorage.setItem('currentUser', null);
        $cookies.remove('user');
        $location.path('/login');

        $alert({
          content: 'You have been logged out.',
          placement: 'top-right',
          type: 'info',
          duration: 3
        });
      });
    },
    getAutentificatedUserId: function() {
      var user = $window.sessionStorage.getItem('currentUser');
      var userObject = JSON.parse(user);

      return  userObject._id;
    }
  };
};
