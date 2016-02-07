module.exports = function CalendarController(Vendor, interviewResource) {
  const {moment} = Vendor;

  const vm = this;

  vm.events = [];

  interviewResource.list().then((interviews) => {
    vm.eventSources[0] = interviews.map((interview) => {
      interview.start = moment(interview.date);
      interview.end = moment(interview.date).add(1, 'h').toDate();
      interview.title = 'fadsf';
      return interview;
    });
  });

  vm.eventSources = [vm.events];

  vm.uiConfig = {
    calendar: {
      height: 'auto',
      editable: true,
      header: {
        left: 'title',
        center: 'month basicWeek basicDay agendaWeek agendaDay',
        right: 'today prev,next'
      },
      fixedWeekCount: false,
      columnFormat: 'dddd',
      dayClick: vm.alertEventOnClick,
      eventDrop: vm.alertOnDrop,
      eventResize: vm.alertOnResize
    }
  };
};