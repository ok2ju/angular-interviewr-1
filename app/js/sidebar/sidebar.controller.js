module.exports = function() {
    var vm = this;

    vm.items = [
        {
            name: 'Video Room',
            url: '/videoroom',
            active: false,
            icon: 'icon-videocam',
            state: 'app.test'
        },
        {
            name: 'Candidates',
            url: '/candidates',
            active: true,
            icon: 'icon-users',
            state: 'app.test'
        },
        {
            name: 'Vacancies',
            url: '/vancancies',
            active: false,
            icon: 'icon-newspaper',
            state: 'app.test'
        },
        {
            name: 'Calendar',
            url: '/calendar',
            active: false,
            icon: 'icon-calendar',
            state: 'app.test'
        },
        {
            name: 'Companies',
            url: '/companies',
            active: false,
            icon: 'icon-building',
            state: 'app.test'
        },
        {
            name: 'My company',
            url: '/mycompany',
            active: false,
            icon: 'icon-diamond',
            state: 'app.myCompanyProfile'
        }
    ];
};
