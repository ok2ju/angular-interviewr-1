module.exports = function CompanyManageController(myself, companyResource, toastr, $state, config, imageService) {

  var vm = this;

  const {USER_DEFAULT_IMAGE} = imageService.getConstants();

  vm.getImageUrl = getImageUrl;
  vm.getUserImageUrl = getUserImageUrl;

  companyResource.listCompanies({owner: myself._id}).then(function(companies) {
    vm.companies = companies;
  });

  function getImageUrl(company) {
    return imageService.getImageUrl(company, USER_DEFAULT_IMAGE);
  }

  function getUserImageUrl(user) {
    return imageService.getImageUrl(user, USER_DEFAULT_IMAGE);
  }

};
