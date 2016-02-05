import angular from 'angular';

import {Vendor} from './vendor.service';
import {ImageService} from './image.service';

angular
  .module('app.services', ['restangular'])
    .factory('imageService', ImageService)
    .factory('Vendor', Vendor);
