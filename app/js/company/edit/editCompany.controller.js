module.exports = function(CompanyResource, metaResource, $scope,
                          toastr, $state, $uibModal, config, $stateParams) {
  var vm = this;

  vm.updateCompany = updateCompany;

  CompanyResource.oneCompany($stateParams.id).then(function(company) {
    vm.company = company;
  });

  function updateCompany() {
    vm.company.put().then(function() {
      $state.go('app.manageCompany');
      toastr.success('Company settings was successfully updated.', 'Yay!');
    }, function(err) {
        toastr.error('Error while updating.', 'Error!');
    });
  }
};
