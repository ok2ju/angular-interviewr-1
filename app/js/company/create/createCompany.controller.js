module.exports = function(CompanyService) {
  var vm = this;

  vm.registerCompany = registerCompany;
  vm.company = new CompanyService();

  function registerCompany() {
    console.log(vm.company);
    vm.company.$save(function() {
      console.log('Company Saved');
    });
  }
};
