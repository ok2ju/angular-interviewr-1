module.exports = function CompanyProfileController(CompanyResource, UserResource, $stateParams) {
  var vm = this;

  CompanyResource.oneCompany($stateParams.id).then(function(company) {
    vm.company = company;

    UserResource.oneUser(company.owner_id).then(function(user) {
      vm.owner = user;
    });
  });
};
