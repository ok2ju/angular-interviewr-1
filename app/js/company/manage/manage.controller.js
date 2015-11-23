module.exports = function CompanyManageController(store, jwtHelper, UserResource, CompanyResource) {
  var vm = this;
  var jwt = store.get('jwt');
  var decodedJwt = jwt && jwtHelper.decodeToken(jwt);

  vm.deleteCompany = deleteCompany;

  UserResource.userCompanies(decodedJwt._id).then(function(companies) {
    vm.companies = companies;
  });

  function deleteCompany(company) {
    CompanyResource.removeCompany(company._id).then(function() {
      console.log('Company was successfully removed!');
    }, function(err) {
        console.log('Error while deleting company!');
    });
  }
};
