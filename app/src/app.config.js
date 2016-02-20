import angular from 'angular';
import {ROOT_DIR} from './constants';

module.exports = function($stateProvider, $urlRouterProvider, $locationProvider,
                          $httpProvider, jwtInterceptorProvider, toastrConfig,
                          cfpLoadingBarProvider, RestangularProvider) {

  RestangularProvider.setBaseUrl('http://localhost:3000/api/v1');

  RestangularProvider.setRestangularFields({
    id: "_id"
  });

  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];

  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/login');

  jwtInterceptorProvider.tokenGetter = function(store) {
    return store.get('jwt');
  };

  $httpProvider.interceptors.push('jwtInterceptor');

  // angular loading bar config
  cfpLoadingBarProvider.includeSpinner = false;

  // Toastr config
  angular.extend(toastrConfig, {
    autoDismiss: false,
    containerId: 'toast-container',
    maxOpened: 0,
    newestOnTop: true,
    positionClass: 'toast-bottom-right',
    preventDuplicates: false,
    preventOpenDuplicates: false,
    target: 'body'
  });

  $stateProvider
    .state('intro', {
      abstract: true,
      views: {
        'content': {
          templateUrl: `${ROOT_DIR}/src/templates/intro-layout.tpl.html`
        }
      }
    })
    .state('app', {
      abstract: true,
      views: {
        'content': {
          templateUrl: `${ROOT_DIR}/src/templates/app-layout.tpl.html`,
          controller($scope, $rootScope) {
          }
        }
      },
      resolve: {
        metaResource: 'metaResource',
        userResource: 'userResource',

        countries(metaResource) {
          return metaResource.getCountries();
        },

        categories(metaResource) {
          return metaResource.getCategories();
        },

        positions(metaResource) {
          return metaResource.getVacancyPosition();
        },

        vacancyTypes(metaResource) {
          return metaResource.getVacancyType();
        }
      }
    });
};
