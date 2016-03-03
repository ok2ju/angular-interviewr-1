import angular from 'angular';

import {Vendor} from './vendor.service';
import {ImageService} from './image.service';
import {AuthService} from './auth.service';
import {ClickanywhereService} from './clickanywhere.service';

angular
  .module('app.services', ['restangular'])
    .factory('imageService', ImageService)
    .factory('Vendor', Vendor)
    .factory('authService', AuthService)
    .factory('clickAnywhereService', ClickanywhereService);
