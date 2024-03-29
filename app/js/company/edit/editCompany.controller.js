var moment = require('moment');

module.exports = function(CompanyResource, $scope,
                          toastr, $state, $uibModal, config, $stateParams, countries, categories) {
  var vm = this;

  vm.company = {};
  vm.updateCompany = updateCompany;
  vm.getImageUrl = getImageUrl;

  // Fetching data for countries dropdown
  vm.countries = countries.data;

  // Fetching data for categories dropdown
  vm.categories = categories.data;

  CompanyResource.oneCompany($stateParams.id).then(function(company) {
    vm.company = company;
  });

  // Datepicker options
  vm.today = function() {
    vm.company.yof = new Date();
  };
  vm.today();

  vm.maxDate = new Date(2020, 5, 22);

  vm.openDatepicker = function($event) {
    vm.status.opened = true;
  };

  vm.dateOptions = {
    formatYear: 'yy',
    startingDay: 1
  };

  vm.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  vm.format = vm.formats[0];

  vm.status = {
    opened: false
  };

  $scope.$watch('vm.company.yof', function(current, original) {
    vm.company.yof = moment.utc(current).format();
  });

  function getImageUrl() {
    var res = '';
    if(vm.company && vm.company.imageId) {
      res = config.api_url + '/api/v1/images/' + vm.company.imageId;
    } else {
      res = 'images/companies/default.png';
    }
    return res;
  }

  function updateCompany() {
    vm.company.put().then(function() {
      $state.go('app.manageCompany');
      toastr.success('Company settings was successfully updated.', 'Yay!');
    }, function(err) {
        toastr.error('Error while updating.', 'Error!');
    });
  }
};
