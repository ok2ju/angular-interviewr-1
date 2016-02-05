import moment from 'moment';
import _ from 'lodash';
import $ from 'jquery';

window.moment = moment;

export function Vendor(Restangular) {
  return {
    moment,
    _,
    R: Restangular,
    $
  };
}
