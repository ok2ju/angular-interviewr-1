module.exports = function CompanyManageController(myself, CompanyResource, toastr, $state, config, imageService) {
  var vm = this;

  vm.getImageUrl = getImageUrl;
  vm.getUserImageUrl = getUserImageUrl;

  CompanyResource.listCompanies({owner: myself._id}).then(function(companies) {
    vm.companies = companies;
  });

  function getImageUrl(company) {
    /*var res = '';
    if(company && company.imageId) {
      res = config.api_url + '/api/v1/images/' + company.imageId;
    } else {
      res = 'assets/images/companies/default.png';
    }
    return res;*/
    return imageService.getImageUrl(company, 'assets/images/companies/default.png');
  }

  function getUserImageUrl(user) {
    return imageService.getImageUrl(user, 'assets/images/user-default.png');
  }

};
