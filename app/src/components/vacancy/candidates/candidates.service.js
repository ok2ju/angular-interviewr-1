const candidates = [
  {
    "id": 1,
    "name": "Scott",
    "surname": "Chisholm",
    "position": "Front-End",
    "testResult": 82,
    "applicationDate": 1436703772957,
    "avatar": "dist/assets/images/users/1.png",
    "posColor": "label-warning"
  },
  {
    "id": 2,
    "name": "Max",
    "surname": "Green",
    "position": "iOS Developer",
    "testResult": 82,
    "applicationDate": 1436703772957,
    "avatar": "dist/assets/images/users/12.png",
    "posColor": "label-info"
  },
  {
    "id": 3,
    "name": "Sylvester",
    "surname": "Stallone",
    "position": "Designer",
    "testResult": 82,
    "applicationDate": 1436703772957,
    "avatar": "dist/assets/images/users/1.png",
    "posColor": "label-default"
  },
  {
    "id": 4,
    "name": "Peter",
    "surname": "Griffin",
    "position": "QA Engineer",
    "testResult": 82,
    "applicationDate": 1436703772957,
    "avatar": "dist/assets/images/users/12.png",
    "posColor": "label-danger"
  },
  {
    "id": 5,
    "name": "Arnold",
    "surname": "Schwarzenegger",
    "position": "Front-End",
    "testResult": 82,
    "applicationDate": 1436703772957,
    "avatar": "dist/assets/images/users/1.png",
    "posColor": "label-warning"
  },
  {
    "id": 6,
    "name": "Brad",
    "surname": "Pitt",
    "position": "Front-End",
    "testResult": 82,
    "applicationDate": 1436703772957,
    "avatar": "dist/assets/images/users/12.png",
    "posColor": "label-warning"
  }
]

module.exports = function($http) {
    return {
      success(fn) {
        fn(candidates);
      }
    }
    /*return $http.get('./api/candidates.json').success(function(data) {
        return data;
    }).error(function() {
        return err;
    });*/
};
