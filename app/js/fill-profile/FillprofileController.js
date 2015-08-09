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

  vm.tags = [
    { text: 'java' },
    { text: 'javascript' },
    { text: 'scala' },
    { text: 'python' }
  ];

  vm.loadSkills = function($query) {
    var skills = FillprofileService.getListOfSkills();
    console.log(skills);
    /*return skills.filter(function(skill) {
      return skill.name.toLowerCase().indexOf($query.toLowerCase()) != -1;
    });*/
  };

  function updateProfile() {
    actualUserObj.name = vm.name;
    actualUserObj.surname = vm.surname;
    actualUserObj.email = vm.email;
    actualUserObj.country = vm.country;
    FillprofileService.fillprofile(actualUserObj);
  }

};
