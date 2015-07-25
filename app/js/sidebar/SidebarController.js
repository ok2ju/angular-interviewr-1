module.exports = function() {
    var vm = this;

    vm.items = [
        {
            name: 'messages',
            url: '/messages',
            active: false
        },
        {
            name: 'candidates',
            url: '/candidates',
            active: true
        },
        {
            name: 'vacancy',
            url: '/vancancies',
            active: false
        },
        {
            name: 'search',
            url: '/calendar',
            active: false
        },
        {
            name: 'companies',
            url: '/companies',
            active: false
        }
    ];
};