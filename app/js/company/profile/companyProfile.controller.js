module.exports = function CompanyProfileController(CompanyResource, UserResource, $stateParams, config) {
  var vm = this;
  vm.getImageUrl = getImageUrl;

  CompanyResource.oneCompany($stateParams.id).then(function(company) {
    vm.company = company;

    UserResource.oneUser(company.owner_id).then(function(user) {
      vm.owner = user;
    });
  });

  function getImageUrl() {
    var res = '';
    if(vm.company && vm.company.imageId) {
      res = config.api_url + '/api/v1/images/' + vm.company.imageId;
    } else {
      res = 'images/companies/default.png';
    }
    return res;
  };
};
