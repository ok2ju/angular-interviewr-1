module.exports = function() {
    var vm = this;

    vm.items = [
        {
            name: 'Video Room',
            url: '/videoroom',
            active: false,
            icon: 'icon-videocam'
        },
        {
            name: 'Candidates',
            url: '/candidates',
            active: true,
            icon: 'icon-user'
        },
        {
            name: 'Vacancies',
            url: '/vancancies',
            active: false,
            icon: 'icon-doc'
        },
        {
            name: 'Calendar',
            url: '/calendar',
            active: false,
            icon: 'icon-calendar'
        },
        {
            name: 'Companies',
            url: '/companies',
            active: false,
            icon: 'icon-globe'
        },
        {
            name: 'My company',
            url: '/mycompany',
            active: false,
            icon: 'icon-globe'
        }
    ];
};