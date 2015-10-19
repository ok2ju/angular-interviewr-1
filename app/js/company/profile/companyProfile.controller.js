module.exports = function(CompanyResource, $stateParams) {
  var vm = this;

  vm.company = CompanyResource.get({ id: $stateParams.id });
};
