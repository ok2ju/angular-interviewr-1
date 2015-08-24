module.exports = function($http) {

    return $http.get('../api/candidates.json').success(function(data) {
        return data;
    }).error(function() {
        return err;
    });

    /*return {
        list: function(){
            return candidates;
        },
        find: function(id){
            return _.find(candidates, function(candidate){return candidate.id == id});
        }
    }*/
};
