module.exports = function() {
    var vm = this;

    vm.items = [
        {
            name: 'Messages',
            url: '/messages',
            active: false,
            icon: 'icon-mail'
        },
        {
            name: 'Candidates',
            url: '/candidates',
            active: true,
            icon: 'icon-users'
        },
        {
            name: 'Vacancy',
            url: '/vancancies',
            active: false,
            icon: 'icon-newspaper'
        },
        {
            name: 'Search',
            url: '/calendar',
            active: false,
            icon: 'icon-search'
        },
        {
            name: 'Companies',
            url: '/companies',
            active: false,
            icon: 'icon-hospital'
        }
    ];
};