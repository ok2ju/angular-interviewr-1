import {ROOT_DIR} from '../../../constants';
import moment from 'moment';
import $ from 'jquery';

module.exports = function CompanyCreateController(companyResource, $scope,
                            toastr, $state, $uibModal, config, countries, categories, imageService) {
  var vm = this;
  vm.company = {};

  // Fetching data for countries dropdown
  vm.countries = countries.data;

  // Fetching data for categories dropdown
  vm.categories = categories.data;

  vm.registerCompany = registerCompany;

  $scope.$watch('vm.company.description', function(current, original) {
    vm.company.short_description = vm.company.description ? current.substring(0, 180) + '...' : '';
  });

  function registerCompany() {
    companyResource.postCompany(vm.company).then(function() {
      toastr.success('Company created.', 'Yay!');
      $state.go('app.companies');
      console.log('Company Saved');
    }, function(err) {
        toastr.error('Error while creating company.', 'Error!');
    });
  }

  vm.getImageUrl = function() {
    return imageService.getImageUrl(vm.company, '/assets/images/companies/default.png');
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

  vm.open = function (size) {
    $uibModal.open({
      animation: true,
      templateUrl: `${ROOT_DIR}/src/components/company/create/modal.tpl.html`,
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
};
