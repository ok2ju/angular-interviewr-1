module.exports = function CompanyManageController(store, jwtHelper, UserResource) {
  var vm = this;
  var jwt = store.get('jwt');
  var decodedJwt = jwt && jwtHelper.decodeToken(jwt);

  UserResource.userCompanies(decodedJwt._id).then(function(companies) {
    vm.companies = companies;
  });
};
