module.exports = function CompanyManageController(myself, UserResource, CompanyResource, toastr, $state) {
  var vm = this;

  vm.deleteCompany = deleteCompany;

  UserResource.userCompanies(myself._id).then(function(companies) {
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
};
