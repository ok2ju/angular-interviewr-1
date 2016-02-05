export function LandingConfig($stateProvider, config) {
  $stateProvider
    .state('intro.landing', {
      url: '/',
      templateUrl: `${config.ROOT_DIR}/src/compoenents/layout/landing/landing.tpl.html`,
      data: {
        pageTitle: 'Landing'
      }
    });
}