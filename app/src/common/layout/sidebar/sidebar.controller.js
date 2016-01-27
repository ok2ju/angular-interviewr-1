module.exports = function LayoutSidebarController() {
  var vm = this;

  vm.items = [{
    name: 'Video Room',
    icon: 'icon-videocam',
    state: 'app.videoroom'
  },
  {
    name: 'Vacancies',
    icon: 'icon-newspaper',
    state: 'app.vacanciesList'
  },
  {
    name: 'Calendar',
    icon: 'icon-calendar',
    state: 'app.test'
  },
  {
    name: 'Companies',
    icon: 'icon-building',
    state: 'app.companies'
  }];

  vm.company = [{
    name: 'My Companies',
    icon: 'icon-diamond',
    state: 'app.manageCompany'
  },
  {
    name: 'Candidates',
    icon: 'icon-users',
    state: 'app.candidates'
  },
  {
    name: 'Vacancy',
    icon: 'icon-newspaper',
    state: 'app.vacanciesManage.companies'
  }];

};
