module.exports = function CompanyProfileController(companyResource, userResource, $stateParams) {
  var vm = this;

  vm.company = companyResource.get({ id: $stateParams.id }, function() {
    vm.owner = userResource.get({ id: vm.company.owner_id });
  });
};
