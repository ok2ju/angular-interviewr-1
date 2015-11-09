module.exports = function LayoutSidebarController() {
    var vm = this;

    vm.items = [{
        name: 'Video Room',
        url: '/videoroom',
        active: false,
        icon: 'icon-videocam',
        state: 'app.test'
    }, {
        name: 'Vacancies',
        url: '/vancancies',
        active: false,
        icon: 'icon-newspaper',
        state: 'app.vacancies'
    }, {
        name: 'Calendar',
        url: '/calendar',
        active: false,
        icon: 'icon-calendar',
        state: 'app.test'
    }, {
        name: 'Companies',
        url: '/companies',
        active: false,
        icon: 'icon-building',
        state: 'app.companies'
    }];

    vm.company = [{
        name: 'My Company',
        url: '/company/manage',
        active: false,
        icon: 'icon-diamond',
        state: 'app.manageCompany'
    }, {
        name: 'Candidates',
        url: '/candidates',
        active: true,
        icon: 'icon-users',
        state: 'app.test'
    }, {
        name: 'Vacancy',
        url: '/vacancies/manage',
        active: false,
        icon: 'icon-newspaper',
        state: 'app.vacanciesManage'
    }];

    vm.btnToggler = function(menuItem) {
        menuItem.active = true;
        console.log(menuItem);
    };
};
