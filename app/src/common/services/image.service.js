import {ROOT_DIR} from '../../constants';

module.exports = function ImageService(config) {
  return {
    getImageUrl(entry, defaultUrl) {
      var res = '';
      if(entry && entry.imageId) {
        res = config.api_url + '/api/v1/images/' + entry.imageId;
      } else if(defaultUrl) {
        res = `${ROOT_DIR}/${defaultUrl}`;
      }

      return res;
    }
  }
};
