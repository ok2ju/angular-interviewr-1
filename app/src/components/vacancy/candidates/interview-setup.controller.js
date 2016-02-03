import moment from 'moment';

module.exports = function InterviewSetupModalCtrl($scope, $modalInstance) {
  var vm = this;

  vm.interview = {};

  // Datepicker options
  vm.today = function() {
    vm.interview.date = new Date();
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

  $scope.$watch('vm.interview.date', function(current, original) {
    vm.interview.date = moment.utc(current).format();
  });

  vm.ok = function () {

  };

  vm.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
}
