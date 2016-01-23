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
              templateUrl: `${ROOT_DIR}/src/templates/app-layout.tpl.html`
          }
      },
      resolve: {
        metaResource: 'metaResource',
        UserResource: 'UserResource',

        countries: function(metaResource) {
          return metaResource.getCountries();
        },

        categories: function(metaResource) {
          return metaResource.getCategories();
        },

        positions: function(metaResource) {
          return metaResource.getVacancyPosition();
        },

        vacancyTypes: function(metaResource) {
          return metaResource.getVacancyType();
        },

        myself: function(UserResource, store, jwtHelper) {
          var jwt = store.get('jwt');
          var decodedJwt = jwt && jwtHelper.decodeToken(jwt);

          return UserResource.oneUser(decodedJwt._id);
        }
      }
    });
};
