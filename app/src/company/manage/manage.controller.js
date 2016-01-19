module.exports = function CompanyManageController(myself, CompanyResource, toastr, $state, config) {
  var vm = this;

  vm.getImageUrl = getImageUrl;
  vm.getUserImageUrl = getUserImageUrl;

  CompanyResource.listCompanies({owner: myself._id}).then(function(companies) {
    vm.companies = companies;
  });

  function getImageUrl(company) {
    var res = '';
    if(company && company.imageId) {
      res = config.api_url + '/api/v1/images/' + company.imageId;
    } else {
      res = 'assets/images/companies/default.png';
    }
    return res;
  }

  function getUserImageUrl(user) {
    var res = '';
    if(user && user.imageId) {
      res = config.api_url + '/api/v1/images/' + user.imageId;
    } else {
      res = 'assets/images/user-default.png';
    }
    return res;
  }

};
