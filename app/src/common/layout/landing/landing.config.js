import {ROOT_DIR} from '../../../constants';

module.exports = function($stateProvider) {
  $stateProvider
    .state('intro.landing', {
      url:'/',
      templateUrl: `${ROOT_DIR}/src/common/layout/landing/landing.tpl.html`,
      data: {
        pageTitle: 'Landing'
      }
    });
};
