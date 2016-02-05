import {ROOT_DIR} from '../../constants';
import _ from 'lodash';

module.exports = function ImageService(config) {
  const CONSTANTS = {
    USER_DEFAULT_IMAGE: 'assets/images/user-default.png',
    COMPANY_DEFAULT_IMAGE: 'assets/images/companies/default.png'
  }

  function getImageUrl (entry, defaultUrl) {
    var res = '';
    if(entry && entry.imageId) {
      res = config.api_url + '/api/v1/images/' + entry.imageId;
    } else if(defaultUrl) {
      res = `${ROOT_DIR}/${defaultUrl}`;
    }
    return res;
  }

  function getCompanyImage(company) {
    return imageService.getImageUrl(company, USER_DEFAULT_IMAGE);
  }

  function getUserImageUrl(user) {
    return imageService.getImageUrl(user, USER_DEFAULT_IMAGE);
  }

  return {
    getImageUrl,
    getUserImage,
    getCompanyImage,

    getUserImage(entry) {
      return this.getImageUrl(entry, CONSTANTS.USER_DEFAULT_IMAGE);
    },

    getContants() {
      return _.clone(CONSTANTS);
    }
  }
};
