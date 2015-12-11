module.exports = function CompanyProfileController(CompanyResource, UserResource, $stateParams, config) {
  var vm = this;
  vm.getImageUrl = getImageUrl;

  CompanyResource.oneCompany($stateParams.id).then(function(company) {
    vm.company = company;
    vm.owner = company.owner;
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
