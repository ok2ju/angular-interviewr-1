module.exports = function($http) {
  return {
    fillprofile: function(user) {
      return $http.put('api/users/' + user._id, user).success(function(data) {
        return data;
      });
    },
    getListOfSkills: function() {
      return $http.get('api/skills').success(function(data) {
        return data;
      });
    }
  };
};
