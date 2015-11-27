module.exports = function CompanyManageController(store, jwtHelper, UserResource, CompanyResource, toastr, $state) {
  var vm = this;
  var jwt = store.get('jwt');
  var decodedJwt = jwt && jwtHelper.decodeToken(jwt);

  vm.deleteCompany = deleteCompany;

  UserResource.userCompanies(decodedJwt._id).then(function(companies) {
    vm.companies = companies;
  });

  function deleteCompany(company) {
    CompanyResource.removeCompany(company._id).then(function() {
      $state.go($state.current, {}, { reload: true });
      toastr.success('Company was successfully deleted.', 'Yay!');
    }, function(err) {
        console.log('Error while deleting company!');
    });
  }
};
