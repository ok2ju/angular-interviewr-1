module.exports = function CompanyManageController(myself, companyResource, imageService) {

  const vm = this;

  vm.getImageUrl = imageService.getCompanyImageUrl;
  vm.getUserImageUrl = imageService.getUserImageUrl;

  companyResource.list({owner: myself._id}).then(function(companies) {
    vm.companies = companies;
  });
};
