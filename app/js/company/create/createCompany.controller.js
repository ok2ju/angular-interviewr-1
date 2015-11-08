var moment = require('moment');

module.exports = function(CompanyResource, metaService, $scope, $http, toastr, $state) {
  var vm = this;
  vm.registerCompany = registerCompany;
  vm.company = new CompanyResource.Profile();

  $scope.$watch('vm.company.description', function(current, original) {
    vm.company.shortDesc = vm.company.description ? current.substring(0, 180) + '...' : '';
  });

  function registerCompany() {
    console.log(vm.company.owner_id);
    vm.company.$save(function() {
      toastr.success('Company created.', 'Yay!');
      $state.go('app.companies');
      console.log('Company Saved');
    });
  }

  // Datepicker options

  vm.today = function() {
    vm.company.yof = new Date();
  };
  vm.today();

  vm.maxDate = new Date(2020, 5, 22);

  vm.open = function($event) {
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

  // Get data for fields

  vm.getCountries = function() {
    metaService.getCountries().then(function(response) {
      vm.countries = response.data;
    }, function(error) {
      console.log('Error!');
    });
  };

  vm.getCategories = function() {
    metaService.getCategories().then(function(response) {
      vm.categories = response.data;
    }, function(error) {
      console.log('Error!');
    });
  };

  vm.getCountries();
  vm.getCategories();

  vm.country = '';
  vm.category = '';

  $scope.$watch('vm.country', function(current, original) {
    vm.company.location = current.name;
  });

  $scope.$watch('vm.category', function(current, original) {
    vm.company.category = current.name;
  });

};
