module.exports = function(MyCompanyProfileService) {
  var vm = this;

  var user = sessionStorage.getItem('currentUser');
  var actualUserObj = JSON.parse(user);

  var company = MyCompanyProfileService.get({ id: actualUserObj.companies[0] }, function() {
    vm.company = company.name;
  });

  var allCompanies = MyCompanyProfileService.get();

  vm.companies = allCompanies;

  vm.test = function() {
    console.log(actualUserObj.companies[0]);
  };
};
