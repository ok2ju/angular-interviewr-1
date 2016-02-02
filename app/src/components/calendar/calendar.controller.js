module.exports = function CalendarController() {
  var vm = this;

  vm.eventSources = [];

  vm.uiConfig = {
    calendar:{
      height: 450,
      editable: true,
      header:{
        left: 'month basicWeek basicDay agendaWeek agendaDay',
        center: 'title',
        right: 'today prev,next'
      },
      dayClick: vm.alertEventOnClick,
      eventDrop: vm.alertOnDrop,
      eventResize: vm.alertOnResize
    }
  };
};
