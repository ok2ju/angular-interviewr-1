module.exports = function InterviewSetupModalCtrl($uibModalInstance) {
  const vm = this;

  vm.dateModel = {
    date: new Date(),
    maxDate: new Date(2020, 5, 22),
    dateOptions: {
      formatYear: 'yy',
      startingDay: 1
    },
    format: 'dd-MMMM-yyyy',
    opened: false
  };

  vm.openDatepicker = function() {
    vm.dateModel.opened = !vm.dateModel.opened;
  };

  vm.timeModel = {
    time: new Date(),
    hourStep: 10,
    minuteStep: 10,
    showMeridian: false
  };

  vm.ok = function() {
    $uibModalInstance.close({
      date: vm.dateModel.date,
      time: vm.timeModel.time
    });
  };

  vm.cancel = function() {
    $uibModalInstance.dismiss('cancel');
  };
};