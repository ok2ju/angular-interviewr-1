var moment = require('moment');

module.exports = function(CompanyResource, $scope) {
  var vm = this;

  vm.registerCompany = registerCompany;
  vm.company = new CompanyResource();

  function registerCompany() {
    vm.company.$save(function() {
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
};
