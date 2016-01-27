module.exports = function CompanyManageController(myself, companyResource, toastr, $state, config, imageService) {
  var vm = this;

  vm.getImageUrl = getImageUrl;
  vm.getUserImageUrl = getUserImageUrl;

  companyResource.listCompanies({owner: myself._id}).then(function(companies) {
    vm.companies = companies;
  });

  function getImageUrl(company) {
    return imageService.getImageUrl(company, 'assets/images/companies/default.png');
  }

  function getUserImageUrl(user) {
    return imageService.getImageUrl(user, 'assets/images/user-default.png');
  }

};
