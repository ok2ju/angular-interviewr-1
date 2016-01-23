module.exports = function($http) {

    return $http.get('./api/candidates.json').success(function(data) {
        return data;
    }).error(function() {
        return err;
    });
};
