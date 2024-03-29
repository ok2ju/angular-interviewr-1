var moment = require('moment');
var $ = require('jquery');

module.exports = function CompanyCreateController(CompanyResource, $scope,
                                                  toastr, $state, $uibModal, config, countries, categories) {
  var vm = this;
  vm.company = {};

  // Fetching data for countries dropdown
  vm.countries = countries.data;

  // Fetching data for categories dropdown
  vm.categories = categories.data;

  vm.registerCompany = registerCompany;

  $scope.$watch('vm.company.description', function(current, original) {
    vm.company.shortDesc = vm.company.description ? current.substring(0, 180) + '...' : '';
  });

  function registerCompany() {
    CompanyResource.postCompany(vm.company).then(function() {
      toastr.success('Company created.', 'Yay!');
      $state.go('app.companies');
      console.log('Company Saved');
    }, function(err) {
        toastr.error('Error while creating company.', 'Error!');
    });
  }

  vm.getImageUrl = function() {
    var res = '';
    if(vm.company && vm.company.imageId) {
      res = config.api_url + '/api/v1/images/' + vm.company.imageId;
    } else {
      res = 'images/companies/default.png';
    }
    return res;
  };

  //file upload
  vm.onFileSelected = function() {
    if(vm.file) {
      vm.open();
    }
  };

  vm.openFileDialog = function() {
    $('#up-photo').click();
  };

  // modal window
  vm.animationsEnabled = true;

  vm.open = function (size) {
    var modalInstance = $uibModal.open({
      animation: vm.animationsEnabled,
      templateUrl: 'js/company/create/modal.html',
      controller: 'CompanyModalController',
      controllerAs: 'vm',
      size: size,
      resolve: {
        file: function () {
          return vm.file;
        },
        company: function() {
          return vm.company;
        }
      }
    });
  };

  vm.toggleAnimation = function () {
    vm.animationsEnabled = !vm.animationsEnabled;
  };

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

};
