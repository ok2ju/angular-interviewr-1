module.exports = function CompanyManageController(myself, CompanyResource, toastr, $state, config) {
  var vm = this;

  vm.deleteCompany = deleteCompany;
  vm.getImageUrl = getImageUrl;
  vm.getUserImageUrl = getUserImageUrl;

  CompanyResource.listCompanies({owner: myself._id}).then(function(companies) {
    vm.companies = companies;
  });

  function deleteCompany(company) {
    CompanyResource.removeCompany(company._id).then(function() {
      $state.go($state.current, {}, { reload: true });
      toastr.success('Company was successfully deleted.', 'Yay!');
    }, function(err) {
        console.log('Error while deleting company!');
    });
  }

  function getImageUrl(company) {
    var res = '';
    if(company && company.imageId) {
      res = config.api_url + '/api/v1/images/' + company.imageId;
    } else {
      res = 'images/companies/default.png';
    }
    return res;
  }

  function getUserImageUrl(user) {
    var res = '';
    if(user && user.imageId) {
      res = config.api_url + '/api/v1/images/' + user.imageId;
    } else {
      res = 'images/user-default.png';
    }
    return res;
  }

};
