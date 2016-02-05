import angular from 'angular';
import {LandingConfig} from './landing.config';

angular
  .module('app.landing', [])
    .config(LandingConfig);
