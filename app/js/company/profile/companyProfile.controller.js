module.exports = function CompanyProfileController(CompanyResource, UserResource, $stateParams) {
  var vm = this;

  vm.company = CompanyResource.get({ id: $stateParams.id }, function() {
    vm.owner = UserResource.get({ id: vm.company.owner_id });
  });
};
