import {ROOT_DIR} from '../../constants';
import ng from 'angular';

ng
  .module('app.services', [])
  .factory('imageService', function(config) {
      return {
        getImageUrl(company) {
          var res = '';
          if(company && company.imageId) {
            res = config.api_url + '/api/v1/images/' + company.imageId;
          } else {
            res = 'assets/images/companies/default.png';
          }
          return res;
        },

        getUserImageUrl(user) {
          var res = '';
          if(user && user.imageId) {
            res = config.api_url + '/api/v1/images/' + user.imageId;
          } else {
            res = 'assets/images/user-default.png';
          }
          return res;
        }
      }
  });