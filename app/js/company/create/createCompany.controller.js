module.exports = function(CompanyResource) {
  var vm = this;

  vm.registerCompany = registerCompany;
  vm.company = new CompanyResource();

  function registerCompany() {
    vm.company.$save(function() {
      console.log('Company Saved');
    });
  }
};
