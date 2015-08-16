module.exports = function(CompanyService) {
  var vm = this;

  vm.registerCompany = registerCompany;

  function registerCompany() {
    CompanyService.save({ name: vm.companyName });
  }
};
