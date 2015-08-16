module.exports = function(MyCompanyProfileService) {
  var vm = this;

  var user = sessionStorage.getItem('currentUser');
  var actualUserObj = JSON.parse(user);

  var company = MyCompanyProfileService.get({ id: actualUserObj.companies[0] }, function() {
    vm.company = company.name;
    console.log(company);
  });
};
