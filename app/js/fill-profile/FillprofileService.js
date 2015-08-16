module.exports = function($http) {
  return {
    fillprofile: function(user) {
      return $http.put('http://localhost:3000/api/users/' + user._id, user).success(function(data) {
        return data;
      });
    }
  };
};
