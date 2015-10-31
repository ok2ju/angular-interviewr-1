module.exports = function(CompanyResource, $stateParams) {
  var vm = this;

  vm.company = CompanyResource.Profile.get({ id: $stateParams.id }, function() {
    vm.owner = CompanyResource.Owner.get({ id: vm.company.owner_id });
  });
};
