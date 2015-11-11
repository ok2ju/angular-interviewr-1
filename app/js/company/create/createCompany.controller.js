var moment = require('moment');

module.exports = function CompanyCreateController(CompanyResource, metaResource, $scope, toastr, $state) {
  var vm = this;
  vm.company = {};
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

  // Fetching data for countries dropdown
  metaResource.getCountries().then(function(countries) {
    vm.countries = countries;
  }, function(err) {
      console.log('Error fetching countries!');
  });

  // Fetching data for categories dropdown
  metaResource.getCategories().then(function(categories) {
    vm.categories = categories;
  }, function(err) {
      console.log('Error fetching categories!');
  });

};
