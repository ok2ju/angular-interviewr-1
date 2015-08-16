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
            icon: 'icon-user',
            state: 'app.test'
        },
        {
            name: 'Vacancies',
            url: '/vancancies',
            active: false,
            icon: 'icon-doc',
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
            icon: 'icon-globe',
            state: 'app.test'
        },
        {
            name: 'My company',
            url: '/mycompany',
            active: false,
            icon: 'icon-globe',
            state: 'app.myCompanyProfile'
        }
    ];
};
