module.exports = function(CompanyResource) {
  var vm = this;

  vm.companies = CompanyResource.query();
};
