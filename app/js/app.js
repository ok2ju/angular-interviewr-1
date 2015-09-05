(function() {
    'use strict';

    var $ = require('jquery');
    var angular = require('angular');
    require('angular-ui-router');
    require('angular-resource');
    require('angular-messages');
    require('angular-strap');
    require('angular-strap-tpl');
    require('angular-jwt');
    require('angular-storage');

    angular
        .module('app', [
            'ui.router',
            'ngResource',
            'angular-jwt',
            'angular-storage',

            /* Layout areas */
            'app.header',
            'app.sidebar',

            /* Feature areas */
            'app.landing',
            'app.login',
            'app.signup',
            'app.candidates',
            'app.user.settings',
            'app.regCompany',
            'app.myCompanyProfile'
        ])
        .config(require('./app.config'))
        .run(run);

    require('./layout/landing');
    require('./layout/sidebar');
    require('./layout/header');
    require('./user/login');
    require('./user/signup');
    require('./user/settings');
    require('./user/my-company-profile');
    require('./company/register-company');
    require('./vacancy/candidates');

    function run($rootScope, $state, store, jwtHelper) {
        $rootScope.$on('$stateChangeStart', function(e, to) {
            if(to.data && to.data.requiresLogin) {
                if(!store.get('jwt') || jwtHelper.isTokenExpired(store.get('jwt'))) {
                    e.preventDefault();
                    $state.go('intro.login');
                }
            }
        });
    }

})();
