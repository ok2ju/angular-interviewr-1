module.exports = function($http, $location, $rootScope, $cookieStore, $alert) {
  sessionStorage.setItem('currentUser', JSON.stringify($cookieStore.get('user')));
  $cookieStore.remove('user');

  return {
    login: function(user) {
      return $http.post('/api/login', user).success(function(data) {
        sessionStorage.setItem('currentUser', JSON.stringify(data));
        $location.path('/candidates');

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
      return $http.post('/api/signup', user).success(function(data) {
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
      return $http.get('/api/logout').success(function() {
        sessionStorage.setItem('currentUser', null);
        $cookieStore.remove('user');
        $location.path('/login');

        $alert({
          content: 'You have been logged out.',
          placement: 'top-right',
          type: 'info',
          duration: 3
        });
      });
    }
  };
};
