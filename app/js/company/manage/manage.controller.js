module.exports = function CompanyManageController($http, CompanyResource, UserResource) {
  var vm = this;

  var url = 'http://localhost:3000/api/v1/users/563f207ff145893c1253be39/companies';

  vm.test = function() {
    $http({
      url: url,
      method: 'GET'
    }).then(function(response) {
      console.log(response);
      vm.companies = response.data.companies;
    }, function(error) {
      console.log('Error!');
    });
  };

  vm.test();
};
