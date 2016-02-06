export function LandingConfig($stateProvider, config) {
  $stateProvider
    .state('intro.landing', {
      url: '/',
      templateUrl: `${config.ROOT_DIR}/src/components/layout/landing/landing.tpl.html`,
      data: {
        pageTitle: 'Landing'
      }
    });
}