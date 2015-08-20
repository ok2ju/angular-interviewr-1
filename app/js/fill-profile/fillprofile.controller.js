module.exports = function(FillprofileService) {
  var vm = this;

  var user = sessionStorage.getItem('currentUser');
  var actualUserObj = JSON.parse(user);

  vm.name = actualUserObj.name;
  vm.surname = actualUserObj.surname;
  vm.email = actualUserObj.email;
  vm.username = actualUserObj.username;
  vm.country = actualUserObj.country;

  vm.fillProfile = updateProfile;

  function updateProfile() {
    actualUserObj.name = vm.name;
    actualUserObj.surname = vm.surname;
    actualUserObj.email = vm.email;
    actualUserObj.country = vm.country;
    FillprofileService.fillprofile(actualUserObj);
  }

};
