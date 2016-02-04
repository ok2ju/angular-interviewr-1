import moment from 'moment';

module.exports = function InterviewSetupModalCtrl($scope, $uibModalInstance, cb) {
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

  vm.time = new Date();

  vm.onTimeChanged = function() {
    console.log('Time changed');
  }  

  vm.ok = function () {
    cb({date: vm.interview.date, time: vm.time});
  };

  vm.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
}
