module.exports = function CompanyProfileController(CompanyResource, UserResource, $stateParams, config, imageService) {
  var vm = this;
  vm.getImageUrl = getImageUrl;

  CompanyResource.oneCompany($stateParams.id).then(function(company) {
    vm.company = company;
    vm.owner = company.owner;
  });

  function getImageUrl() {
    return imageService.getImageUrl(vm.company, 'assets/images/companies/default.png');
  }
};
