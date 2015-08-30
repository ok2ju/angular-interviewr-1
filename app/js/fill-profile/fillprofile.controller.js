module.exports = function(FillprofileService, store, jwtHelper) {
  var vm = this;

  var jwt = store.get('jwt');
  var decodedJwt = jwt && jwtHelper.decodeToken(jwt);

  vm.name = decodedJwt.name;
  vm.surname = decodedJwt.surname;
  vm.email = decodedJwt.email;
  vm.username = decodedJwt.username;
  vm.country = decodedJwt.country;

  vm.fillProfile = updateProfile;

  function updateProfile() {
    actualUserObj.name = vm.name;
    actualUserObj.surname = vm.surname;
    actualUserObj.email = vm.email;
    actualUserObj.country = vm.country;
    FillprofileService.fillprofile(actualUserObj);
  }

};
